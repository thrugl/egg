<template>
	<Screen id="header" no-padding class="text-center" image="1">
		<div class="absolute top-0 p-6 lg:flex">
			<header class="lg:pt-4 lg:w-1/3">
				<Logo :class="$t(
					'inline-block text-center',
					'lg: -> block'
				)"/>
				<div :class="$t(
					'mt-2 mb-4 w-full text-xl oomph'
				)">
					{{ $c.subtitle }}
				</div>
			</header>

			<div :class="$t(
				'lg: -> w-2/3 pt-6 pr-6 pl-12',
				'xl: -> pt-12'
			)">
				<div :class="$t(
					'lg: -> pb-6 flex justify-end items-end',
					'lg: -> border-b border-gray-900',
					'xl: -> items-center pb-4'
				)">
					<MainPhone size="8" :class="$t(
						'text-4xl oomph font-light', 
						'text-orange-600 hover:text-orange-700'
					)"/>
					<OpeningHours/>
					<Address/>
				</div>

				<NavBar/>
			</div>

		</div>
	</Screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Address      from '@@/blocks/Address.vue'
import Logo         from '@@/gui/Logo.vue'
import MainPhone    from '@@/bits/MainPhone.vue'
import NavBar       from '@@/blocks/NavBar.vue'
import OpeningHours from '@@/blocks/OpeningHours.vue'
import Screen       from '@@/screens/Screen.vue'

export default defineComponent({
	name: 'TopScreen',

	components: {
		Address,
		Logo,
		MainPhone,
		NavBar,
		OpeningHours,
		Screen
	}
})
</script>

<style scoped>
nav a {
	@apply font-bold;
}
</style>