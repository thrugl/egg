<template>
	<Field no-padding>
		<template #default="slot">
			<select v-model="model" v-bind="slot" class="p-2 rounded">
				<option v-for="(item, index) of items" :key="item.value+index" v-bind="item">
					{{ item.text }}
				</option>
			</select>
		</template>
	</Field>
</template>

<script lang="ts">
import usePropModel from '#/usePropModel'

import { defineComponent, computed, PropType, watch } from 'vue'
import { is, map, update, either, find, isEmpty } from 'ramda'
import { isShort } from 'geri'

import Field from './Field.vue'

export default defineComponent({
	name: 'SelectField',

	components: {
		Field
	},

	props: {
		modelValue: { type: [Number, String], default: '' },
		options: { type: Array as PropType<(string|number|Option)[]>, default: () => [] },
		noAutoPick: { type: Boolean, default: false }
	},

	setup (props, { emit }) {
		const model = usePropModel(props, emit)
		const findSelected = find((i: Option) => i?.selected ?? false)
		const items = computed<Option[]>(() => {
			const ifPrimary  = (i: number|string): Option => ({ text: `${i}`, value: i })
			const toOption   = (i: string|number|Option): Option => either(is(String), is(Number))(i) ? ifPrimary(i as number|string) : (i as Option)

			const options = map(toOption)(props.options)
			
			return (
				isShort(options)||props.noAutoPick||(findSelected(options) ?? false)
					? options 
					: update(0, { ...options[0], selected: true }, options) 
			) 
		})

		watch(() => props.options, () => {
			if (isEmpty(model.value)) {
				model.value = (findSelected(items.value)?.value) ?? ''
			}
		})

		return { model, items }
	}
})
</script>

<style scoped>
select {
	appearance: none;
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
	background-image:url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
}
</style>