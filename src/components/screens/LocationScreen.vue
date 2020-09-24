<template>
	<Screen id="stadsetning" heading="Staðsetning" image="4">

			<div class="bg-gray-600 mt-12 mx-auto w-full max-w-3xl h-96">
				<iframe class="h-full w-full" :src="$c.map" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			</div>
			<div class="mt-6 text-center">
				<span class="block pb-1 font-bold text-xl">
					{{ $c.company }}
				</span>
				<span class="block" v-html="address"/>
				<span class="block">{{ $c.city[0] }}</span>
			</div>

	</Screen>
</template>

<script lang="ts">
import config from '%/config.json'

import { defineComponent } from 'vue'
import { replace } from 'ramda'

import Screen from '@@/screens/Screen.vue'

export default defineComponent({
	name: 'TopScreen',

	components: {
		Screen
	},
	
	setup () {
		const address = replace(/, /g, ',<br/>')(config.address[0])

		return { address  }
	}
})
</script>