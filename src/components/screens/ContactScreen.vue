<template>
	<Screen no-border id="hafa-samband" heading="Hafa samband" tint="3" image="3">
		
		<form name="contact" v-if="!isSubmitted"
			method="POST"
			data-netlify="true" 
			style="max-width: 400px" 
			class="mx-auto block"
			@submit.prevent="onSubmit"
		>
			<TextField v-model="name" required label="Nafn" name="name"/>
			<TextField v-model="email" required label="Netfang" name="email"/>
			<TextField v-model="phone" label="Símanúmer" name="phone"/>
			<AreaField v-model="message" label="Fyrirspurn/ábending" name="message"/>
			<input type="hidden" name="form-name" value="contact"/>

			<Button text="Senda"/>
		</form>
		<div v-else class="text-center">
			<p><strong>Fyrirspurn hefur verið send!</strong></p>
			<p>Við munum svara eins hratt og við getum.</p>
		</div>

		<slot/>
	</Screen>
</template>

<script lang="ts">
import axios from 'axios'

import { defineComponent, ref, computed } from 'vue'

import Button from '@@/gui/Button.vue'
import Screen from '@@/screens/Screen.vue'

import { AreaField, TextField } from '@@/gui/fields'
import { o, join, toPairs, map } from 'ramda'

export default defineComponent({
	name: 'ContactScreen',

	components: {
		AreaField,
		Button,
		Screen,
		TextField
	},

	setup () {
		const name    = ref<string>('')
		const email   = ref<string>('')
		const phone   = ref<string>('')
		const message = ref<string>('')

		const encoded = computed<string>(() => {
			const form = {
				name: name.value,
				email: email.value,
				phone: phone.value,
				message: message.value
			}
			const __ = encodeURIComponent
			const encode = ([ key, value ]: [string, any]) => `${__(key)}=${__(value)}`
			return o(join('&'), map(encode))(toPairs(form))
		})

		// SUBMIT

		const isSubmitted = ref<boolean>(false)

		async function onSubmit () {
			const config = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
			const load   = await axios.post('/', encoded.value, config).catch(i => i)

			console.log(load)

			isSubmitted.value = true
			
		}

		return {
			name,
			email,
			phone,
			message,
			onSubmit
		}
	}
})
</script>