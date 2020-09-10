<template>
	<Email class="no-underline" :number="config.email" :size="$attrs.size"/>
</template>

<script lang="ts">
import config from '%/config.json'

import { defineComponent } from 'vue'

import Email from '@@/bits/Email.vue'

export default defineComponent({
	name: 'MainEmail',

	components: {
		Email
	},

	setup () {
		return { config }
	}
})
</script>