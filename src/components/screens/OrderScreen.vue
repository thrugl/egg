<template>
	<Screen id="panta" heading="Panta tíma" tint="1" image="2">
	
		<NetlifyForm name="order"
			subject="Ný pöntun af vef!"
			button="Panta tíma"
			:fields="[ 
				'licenceplate', 
				'owner', 
				'kt', 
				'email',
				'phone',
				'liability',
				'type',
				'description'
		]">
			<template #fields="fields">
				<TextField required label="Bílnúmer" name="licenceplate" v-model="fields.licenceplate"/>
				<TextField required label="Umráðamaður bifreiðar" name="owner" v-model="fields.owner"/>
				<TextField required label="Kennitala" name="kt" v-model="fields.kt"/>
				<TextField required label="Sími" name="phone" v-model="fields.phone"/>
				<TextField required label="Netfang" name="email" v-model="fields.email"/>
				<SelectField required label="Greiðandi tjóns" name="liability" v-model="fields.liability" 
					:options="[
						'Umráðamaður bifreiðar',
						'Sjóvá',
						'TM/Tryggingamiðstöðin',
						'VÍS/Vátryggingafélag Íslands',
						'Vörður'
					]"
				/>
				<SelectField required label="Tegund tjóns" name="type" v-model="fields.type"
					:options="[
						'Ábyrgðartjón',
						'Kaskótjón',
						'Annað'
					]"
				/>
				<AreaField required label="Lýsing á tjóni" name="description" v-model="fields.description"/>
			</template>
			<template #submitted>
				<p><strong>Pöntun þín hefur verið móttekin!</strong></p>
				<p>Við verðum í sambandi strax og við getum.</p>
			</template>
		</NetlifyForm>
	
	</Screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NetlifyForm from '@@/gui/NetlifyForm.vue'
import Screen from '@@/screens/Screen.vue'

import { AreaField, SelectField, TextField } from '@@/gui/fields'

export default defineComponent({
	name: 'OrderScreen',

	components: {
		AreaField,
		NetlifyForm,
		Screen,
		SelectField,
		TextField
	}
})
</script>