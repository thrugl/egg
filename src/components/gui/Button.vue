<template>
	<button class="bg-orange-600 oomph py-2 px-4 hover:bg-orange-700 pointer border border-orange-400 shadow">
		{{ text }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Button',

	props: {
		text: { type: String, default: '' }
	}
})
</script>