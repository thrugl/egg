<template>
	<Screen id="stadsetning" heading="Staðsetning" class="" style="background-image: url(sideview-red.png)" tint="black">

			<div class="bg-gray-600 mt-12 w-full max-w-3xl h-96 mx-auto">
				<iframe class="h-full w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.49908740854863!2d-21.848375270710424!3d64.11218669897373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6735d50748055%3A0x87361d50caa4897f!2zUmF1w7BnYXRhIDEwLCBLw7NwYXZvZ3Vy!5e0!3m2!1sen!2sis!4v1599751231905!5m2!1sen!2sis" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			</div>
			<div class="text-center mt-6">
				<span class="block font-bold text-xl pb-1">
					{{ config.company }}
				</span>
				<span class="block" v-html="address"/>
				<span class="block">{{ config.city[0] }}</span>
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

		return { address, config }
	}
})
</script>