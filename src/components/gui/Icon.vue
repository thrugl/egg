<template>
	<img :src="`/icons/${name}.png`" :class="`h-${size} w-${size} inline mb-1`"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Icon',

	props: {
		name: { type: String, default: '' },
		size: { type: Number, default: 6 }
	}
})
</script>