<template>
	<a :href="`tel:${number}`" class="inline border-0"> <Icon name="phone" :size="$attrs.size"/> {{ formatted }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { insert, compose, join, split } from 'ramda'

import Icon from '@@/gui/Icon.vue'

export default defineComponent({
	name: 'Phone',

	components: {
		Icon
	},

	props: {
		number: { type: [Number, String], default: '0000000'}
	},

	setup (props) {
		const format = compose(
			join(''),
			insert(3, '-'),
			split('')
		)
		const formatted = format(`${props.number}`)

		return {	
			formatted
		}
	}
})
</script>