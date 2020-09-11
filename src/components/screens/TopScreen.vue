<template>
	<Screen no-padding class="text-center bg-fixed bg-contain bg-no-repeat bg-bottom min-h-screen" style="background-image: url(sideview.png)">
		<div :class="cl(
			'p-6',
			'lg -> flex'
		)">
			<header :class="cl(
				'lg -> pt-4 w-1/3'
			)">
				<Logo :class="cl(
					'inline-block text-center',
					'lg -> block'
				)"/>
				<div :class="cl(
					'mt-2 oomph text-xl mb-4 w-full'
				)">
					{{ config.subtitle }}
				</div>
			</header>

			<div :class="cl(
				'lg -> w-2/3 pt-6 pr-6 pl-12',
				'xl -> pt-12'
			)">
				<div :class="cl(
					'lg -> flex justify-end items-center'
				)">
					<MainPhone class="text-4xl oomph text-orange-600 hover:text-orange-700 font-light" size="8"/>
					
					<div class="py-2 leading-tight lg:inline-block flex-grow">
						<span class="text-sm xl:mr-1">
							Opið
						</span> 
						<br class="xl:hidden"/> 
						<span class="text-xl oomph">
							{{ config.openingHours }} 
						</span> 
						<br class="xl:hidden"/> 
						<small class="xl:ml-1">{{ config.openDays }}</small>
					</div>
					
					<small class="block mt-2 lg:max-w-3xs xl:max-w-none lg:text-left xl:text-center">
						<span class="inline-block">
							{{ config.address[0] }},&nbsp; 
						</span>
						<br class="lg:hidden"/> 
						<span class="inline-block">
							{{ config.city[0] }}
						</span>
						<br class="lg:hidden"/> 
						<a href="stadsetning" class="inline-block mt-1 lg:ml-2">
							<span>Sjá á korti</span>
							<Icon name="marker" size="3"/>
						</a>
					</small>
				</div>

				<nav :class="cl(
					'pt-4 text-center',
					'lg -> pl-24 pr-24'
				)">
					<ul class="block w-full lg:flex">
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

		</div>
	</Screen>
</template>

<script lang="ts">
import config from '%/config.json'
import formatPhone from '@/functions/formatPhone'
import useTailwind from '#/useTailwind'

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
		return { 
			config, 
			formatPhone,
			...useTailwind()
		}
	}
})
</script>

<style scoped>
nav a {
	@apply font-bold;
}
</style>