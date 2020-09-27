<template>
	<Screen no-border id="hafa-samband" heading="Hafa samband" tint="3" image="3">
		
		<form v-bind="formProps" v-if="!isSubmitted"
			style="max-width: 400px" 
			class="mx-auto block"
			@submit.prevent="onSubmit"
		>
			<TextField v-model="name" required label="Nafn" name="name"/>
			<TextField v-model="email" required label="Netfang" name="email"/>
			<TextField v-model="phone" label="Símanúmer" name="phone"/>
			<AreaField v-model="message" label="Fyrirspurn/ábending" name="message"/>
			<input type="hidden" name="form-name" :value="formName"/>

			<Button text="Senda"/>
		</form>
		<div v-else class="text-center bg-black bg-opacity-75 max-w-md mx-auto border border-orange-400 py-4 px-6">
			<p><strong>Fyrirspurn hefur verið send!</strong></p>
			<p>Við munum svara eins hratt og við getum.</p>
		</div>

		<slot/>
	</Screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useNetlifyForm from '#/useNetlifyForm'

import Button from '@@/gui/Button.vue'
import Screen from '@@/screens/Screen.vue'

import { AreaField, TextField } from '@@/gui/fields'

export default defineComponent({
	name: 'ContactScreen',

	components: {
		AreaField,
		Button,
		Screen,
		TextField
	},

	setup () {
		return {
			...useNetlifyForm(
				'contact', [ 
					'name', 
					'email', 
					'phone', 
					'message' 
			])
		}
	}
})
</script>