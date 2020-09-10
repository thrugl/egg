<template>
	<Field>
		<template #default="slot">
			<textarea v-model="model" v-bind="slot"
				:style="{ height: hString }"
			/>
		</template>
	</Field>
</template>

<script lang="ts">
import usePropModel from '#/usePropModel'

import { defineComponent, computed } from 'vue'
import { is } from 'ramda'

import Field from './Field.vue'

export default defineComponent({
	name: 'TextArea',

	components: {
		Field
	},

	props: {
		height: { type: [Number, String], default: 120 },
		value: { type: [Number, String], default: '' },
	},

	setup (props, { emit }) {
		const model   = usePropModel(props, emit) 
		const hString = computed(() => is(Number)(props.height) ? `${props.height}px` : props.height)

		return { hString, model }
	}
})
</script>