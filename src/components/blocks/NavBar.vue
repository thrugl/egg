<template>
	<nav :class="$t(
		'pt-12 text-center',
		'lg: -> pt-6 pl-24 pr-24',
		'xl: -> pt-4'
	)">
		<ul class="block w-full lg:flex">
			<li v-for="({ href, text }, index) of links" :key="`nav-link-${index}`" class="lg:w-1/3">
				<a :href="href">{{ text }}</a>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'NavBar',

	data: () => ({
		links: [
			{ href: '#panta', text: 'Panta tíma' },
			{ href: '#stadsetning', text: 'Staðsetning' },
			{ href: '#hafa-samband', text: 'Hafa samband' }
		]
	})
})
</script>