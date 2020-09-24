<template>
	<small class="block mt-2 lg:max-w-3xs xl:max-w-none lg:text-left xl:text-center">
		<span class="inline-block">
			{{ $c.address[0] }},&nbsp; 
		</span>
		<br class="lg:hidden"/> 
		<span class="inline-block">
			{{ $c.city[0] }}
		</span>
		<br class="lg:hidden"/> 
		<a href="stadsetning" class="inline-block mt-1 lg:ml-2">
			<span>Sjá á korti</span>
			<Icon name="marker" size="3"/>
		</a>
	</small>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Address'
})
</script>