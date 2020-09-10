<template>
	<a :href="`mailto:${email}`" class="inline border-0"> <Icon name="email" :size="$attrs.size"/> {{ email }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { insert, compose, join, split } from 'ramda'

import Icon from '@@/gui/Icon.vue'

export default defineComponent({
	name: 'Email',

	components: {
		Icon
	},

	props: {
		email: { type: String, default: 'example@example.com' }
	}
})
</script>