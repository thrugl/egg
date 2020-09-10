<template>
	<Phone class="no-underline" :number="config.phone" :size="$attrs.size"/>
</template>

<script lang="ts">
import config from '%/config.json'

import { defineComponent } from 'vue'

import Phone from '@@/bits/Phone.vue'

export default defineComponent({
	name: 'MainPhone',

	components: {
		Phone
	},

	setup () {
		return { config }
	}
})
</script>