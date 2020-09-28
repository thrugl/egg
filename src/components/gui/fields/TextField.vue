<template>
	<Field>
		<template #default="slot">
			<input v-model="model" v-bind="slot"/>
		</template>
	</Field>
</template>

<script lang="ts">
import usePropModel from '#/usePropModel'

import { defineComponent, PropType } from 'vue'

import Field from './Field.vue'

export default defineComponent({
	name: 'TextField',

	components: {
		Field
	},

	props: {
		height: { type: [Number, String] as PropType<number|string>, default: 120 },
		modelValue: { type: [Number, String] as PropType<number|string>, default: '' },
	},

	setup (props, { emit }) {
		return { 
			model: usePropModel(props, emit) 
		}
	}
})
</script>