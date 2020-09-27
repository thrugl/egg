import { toPairs, fromPairs, map, join, o, toUpper, isNil } from 'ramda'
import { computed, reactive, ref, toRefs } from 'vue'
import { okFetch } from 'ok-fail'

function useNetlifyForm (name: string, keys: string[], subject?: string) {
	const pairUp = (i: string): [number, string] => [ i as unknown as number, '' ]
	const encode = ([ key, value ]: [string, any]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

	const formName = name
	const formProps = {
		'name': formName,
		'action': `/${formName}`,
		'method': 'POST',
		'data-netlify': true, 
    'data-netlify-honeypot': 'bot-field'
	}
	const formSubject = isNil(subject) ? `New ${toUpper(formName)} submission` : subject
	const state    = reactive(o(fromPairs, map(pairUp))(keys))
	const encoded  = computed<string>(() => {
		const form = { ...state, 'form-name': formName, 'subject': formSubject }
		return o(join('&'), map(encode))(toPairs(form))
	})
	
	const isSubmitted = ref<boolean>(false)
	const onSubmit = async () => {
		const method  = 'POST'
		const body    = encoded.value
		const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
		
		await okFetch('/', { method, body, headers })

		isSubmitted.value = true
	}

	return { onSubmit, ...toRefs(state), encoded, formName, formProps, formSubject, isSubmitted }
}

export default useNetlifyForm