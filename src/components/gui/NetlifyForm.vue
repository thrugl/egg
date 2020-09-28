<template>
	<form v-bind="formProps" v-if="!isSubmitted" 
		class="mx-auto max-w-md"
		@submit.prevent="onSubmit"
	>
		<slot name="fields" v-bind="fields"/>

		<input type="hidden" name="form-name" :value="formName"/>
		<input type="hidden" name="subject" :value="formSubject"/>

		<slot name="submit" :text="button">
			<Button :text="button"/>
		</slot>
	</form>
	<div v-else class="text-center bg-black bg-opacity-75 max-w-md mx-auto border border-orange-400 py-4 px-6">
		<slot name="submitted">
			<p>Skilaboð hafa verið send</p>
		</slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useNetlifyForm from '@/composables/useNetlifyForm'

import Button from '@@/gui/Button.vue'

export default defineComponent({
	name: 'NetlifyForm',

	components: {
		Button
	},

	props: {
		name: { type: String, default: '' },
		fields: { type: Array as PropType<string[]>, default: () => [] },
		subject: { type: [ String, undefined ] as PropType<string|undefined>, default: undefined },
		button: { type: String, default: 'Senda' }
	},
	
	setup (props) {
		return {
			...useNetlifyForm(props.name, props.fields, props.subject)
		}
	}
})
</script>