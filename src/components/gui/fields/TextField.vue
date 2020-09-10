<template>
	<Field>
		<template #default="slot">
			<input v-model="model" v-bind="slot"/>
		</template>
	</Field>
</template>

<script lang="ts">
import usePropModel from '#/usePropModel'

import { defineComponent } from 'vue'

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
		const model = usePropModel(props, emit) 

		return { model }
	}
})
</script>