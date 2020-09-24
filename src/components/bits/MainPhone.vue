<template>
	<Phone class="no-underline" :number="$c.phone" :size="$attrs.size"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Phone from '@@/bits/Phone.vue'

export default defineComponent({
	name: 'MainPhone',

	components: {
		Phone
	}
})
</script>