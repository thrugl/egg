<template>
	<Screen no-border id="hafa-samband" heading="Hafa samband" tint="3" image="3">
		
		<NetlifyForm name="contact"
			subject="Ný skilaboð af vefi!"
			button="Senda"
			:fields="[ 
				'name', 
				'email', 
				'phone', 
				'message' 
		]">
			<template #fields="fields">
				<TextField required label="Nafn" name="name" v-model="fields.name"/>
				<TextField required label="Netfang" name="email" v-model="fields.email"/>
				<TextField label="Símanúmer" name="phone" v-model="fields.phone"/>
				<AreaField label="Fyrirspurn/ábending" name="message" v-model="fields.message"/>
			</template>
			<template #submitted>
				<p><strong>Fyrirspurn hefur verið send!</strong></p>
				<p>Við munum svara eins hratt og við getum.</p>
			</template>
		</NetlifyForm>

		<slot/>
	</Screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useNetlifyForm from '#/useNetlifyForm'

import NetlifyForm from '@@/gui/NetlifyForm.vue'
import Screen from '@@/screens/Screen.vue'

import { AreaField, TextField } from '@@/gui/fields'

export default defineComponent({
	name: 'ContactScreen',

	components: {
		AreaField,
		NetlifyForm,
		Screen,
		TextField
	}
})
</script>