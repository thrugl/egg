<template>
	<div class="py-2 leading-tight flex-grow lg:inline-block">
		<span class="text-sm xl:mr-1">
			Opið
		</span> 
		<br class="xl:hidden"/> 
		<span class="text-xl oomph">
			{{ $c.openingHours }} 
		</span> 
		<br class="xl:hidden"/> 
		<small class="xl:ml-1">
			{{ $c.openDays }}
		</small>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'OpeningHours'
})
</script>