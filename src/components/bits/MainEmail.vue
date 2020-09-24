<template>
	<Email class="no-underline" :email="$c.email" :size="$attrs.size"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Email from '@@/bits/Email.vue'

export default defineComponent({
	name: 'MainEmail',

	components: {
		Email
	}
})
</script>