<template>
	<Screen id="panta" heading="Panta tíma" tint="1" image="2">
	
		<form v-bind="formProps" v-if="!isSubmitted" 
			class="mx-auto max-w-md"
			@submit.prevent="onSubmit"
		>
			<TextField required label="Bílnúmer" name="licenceplate" v-model="plate"/>
			<TextField required label="Umráðamaður bifreiðar" name="owner" v-model="owner"/>
			<TextField required label="Kennitala" name="kt" v-model="kt"/>
			<TextField required label="Sími" name="phone" v-model="phone"/>
			<TextField required label="Netfang" name="email" v-model="email"/>
			<SelectField required label="Greiðandi tjóns" name="liability" v-model="liability" 
				:options="[
					'Umráðamaður bifreiðar',
					'Sjóvá',
					'TM/Tryggingamiðstöðin',
					'VÍS/Vátryggingafélag Íslands',
					'Vörður'
				]"
			/>
			<SelectField required label="Tegund tjóns" name="type" v-model="type"
				:options="[
					'Ábyrgðartjón',
					'Kaskótjón',
					'Annað'
				]"
			/>
			<AreaField required label="Lýsing á tjóni" name="description" v-model="description"/>
			<input type="hidden" name="form-name" :value="formName"/>
			<Button text="Panta tíma"/>
		</form>
		<div v-else class="text-center bg-black bg-opacity-75 max-w-md mx-auto border border-orange-400 py-4 px-6">
			<p><strong>Pöntun þín hefur verið móttekin!</strong></p>
			<p>Við verðum í sambandi strax og við getum.</p>
		</div>
	
	</Screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useNetlifyForm from '#/useNetlifyForm'

import Button from '@@/gui/Button.vue'
import Screen from '@@/screens/Screen.vue'

import { AreaField, SelectField, TextField } from '@@/gui/fields'

export default defineComponent({
	name: 'OrderScreen',

	components: {
		AreaField,
		Button,
		Screen,
		SelectField,
		TextField
	},

	setup () {
		return {
			...useNetlifyForm(
				'order', [ 
					'licenceplate', 
					'owner', 
					'kt', 
					'email',
					'phone',
					'liability',
					'type',
					'description'
			])
		}
	}
})
</script>