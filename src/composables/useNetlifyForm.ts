import { toPairs, fromPairs, map, join, o } from 'ramda'
import { computed, reactive, ref, toRefs } from 'vue'
import { okFetch } from 'ok-fail'

function useNetlifyForm (name: string, keys: string[]) {
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
	const state    = reactive(o(fromPairs, map(pairUp))(keys))
	const encoded  = computed<string>(() => {
		const form = { ...state, 'form-name': formName }
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

	return { onSubmit, ...toRefs(state), encoded, formName, formProps, isSubmitted }
}

export default useNetlifyForm