<template>
	<Screen id="panta" heading="Panta tíma" tint="1" image="2">
		<div class="mx-auto" :style="{ maxWidth: '400px' }">
			<TextField required label="Bílnúmer" name="licence-plate" @update="onUpdate"/>
			<TextField required label="Umráðamaður bifreiðar" name="owner"/>
			<TextField required label="Kennitala" name="kt"/>
			<TextField required label="Sími" name="phone"/>
			<TextField required label="Netfang" name="email"/>
			<SelectField required label="Greiðandi tjóns" name="liability" 
				:options="[
					'Umráðamaður bifreiðar',
					'Sjóvá',
					'TM/Tryggingamiðstöðin',
					'VÍS/Vátryggingafélag Íslands',
					'Vörður'
				]"
				@update="onUpdate"
			/>
			<SelectField required label="Tegund tjóns" name="type"
				:options="[
					'Ábyrgðartjón',
					'Kaskótjón',
					'Annað'
				]"
				@update="onUpdate"
			/>
			<AreaField required label="Lýsing á tjóni" name="description" @update="onUpdate"/>
			<Button text="Panta tíma"/>
		</div>

		<div class="absolute top-0 pt-6 right-0 pr-6 text-sm" >
			<a href="#hafa-samband">Hefurðu kvörtun?</a>
		</div>
	
	</Screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
			onUpdate (x: any) {
				console.log(x)
			}
		}
	}
})
</script>