<template>
	<component :is="label ? 'label' : 'div'" class="block py-2" :for="$attrs.name">
		<div v-if="label" class="pb-1">
			{{ label }} <span v-if="required">*</span>
		</div>
		<div :class="{ 
			'bg-gray-300 text-gray-900 border-2 border-gray-800 w-full focus-within:border-orange-400 rounded shadow-inner': true,
			'p-2': !noPadding
		}">
			<slot v-bind="_slot"/>
		</div>
	</component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import usePropModel from '#/usePropModel'

export default defineComponent({
	name: 'Field',

	props: {
		label: { type: String, default: '' },
		required: { type: Boolean, default: false },
		noPadding: { type: Boolean, default: false }
	},

	setup (props, { attrs }) {
		return {
			_slot: {
				name: attrs.name, 
				class: 'bg-transparent w-full outline-none'
			}
		}
	}
})
</script>