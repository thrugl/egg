<template>
	<Screen class="text-center bg-fixed bg-contain bg-no-repeat bg-bottom min-h-screen" style="background-image: url(sideview.png)">
		<div :class="{
			
		}">
			<header class="">
				<Logo class="block lg:absolute lg:top-0 lg:left-0"/>
				<div class="mt-2 lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:mt-20 lg:pt-1 lg:text-xl oomph lg:text-center">
					{{ config.subtitle }}
				</div>
			</header>
			<div class="my-12 lg:absolute lg:top-0 lg:left-0 lg:mt-6 lg:ml-64 lg:pl-56 lg:flex lg:items-center">
				<MainPhone class="text-4xl oomph lg:inline-block text-orange-600 hover:text-orange-700 font-light" size="8"/>
				<div class="py-2 leading-tight lg:inline-block lg:ml-12">
					<span class="text-xl oomph"><span class="base text-sm mr-1">Opið</span> {{ config.openingHours }} </span> 
					<br class="lg:hidden"/> 
					<small class="lg:ml-1">{{ config.openDays }}</small>
				</div>
				<small class="block mt-2 lg:inline-block lg:ml-12">
					{{ config.address.nominative }} 
					<br class="lg:hidden"/> 
					<a href="stadsetning" class="lg:ml-2"><span>Sjá á korti</span><Icon name="marker" size="3"/></a>
				</small>
			</div>
			<nav class="absolute text-center bottom-0 right-0 lg:top-0 lg:w-1/3 lg:mt-20 lg:pt-2 lg:mr-32 lg:pr-4">
				<ul class="block lg:flex w-full">
					<li class="lg:w-1/3">
						<a href="#panta">Panta tíma</a>
					</li>
					<li class="lg:w-1/3">
						<a href="#stadsetning">Staðsetning</a>
					</li>
					<li class="lg:w-1/3">
						<a href="#hafa-samband">Hafa samband</a>
					</li>
				</ul>
			</nav>
		</div>
	</Screen>
</template>

<script lang="ts">
import config from '%/config.json'
import formatPhone from '@/functions/formatPhone'

import { defineComponent } from 'vue'

import Icon      from '@@/gui/Icon.vue'
import Logo      from '@@/gui/Logo.vue'
import MainPhone from '@@/bits/MainPhone.vue'
import Screen    from '@@/screens/Screen.vue'

export default defineComponent({
	name: 'TopScreen',

	components: {
		Icon,
		Logo,
		MainPhone,
		Screen
	},

	setup () {
		return { config, formatPhone }
	}
})
</script>

<style scoped>
nav a {
	@apply font-bold;
}
</style>