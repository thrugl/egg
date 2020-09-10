<template>
  <div id="app">
		<TopScreen/>
		<OrderScreen/>
		<LocationScreen/>
		<ContactScreen/>

		<footer class="text-center text-white py-8 z-index-50 bg-gray-900 bg-opacity-25 shadow-inner">
			<small>
				<span>Sprautuverk ehf, kt. 123456-1200</span>
				<br class="lg:hidden"/> 
				<span class="lg:ml-4">{{ config.address.dative }}</span>
				<br class="lg:hidden"/> 
				<MainPhone size="3" class="lg:ml-4"/> <MainEmail size="3" class="ml-4"/>
			</small>
		</footer>
  </div>
</template>

<script lang="ts">
import config      from '%/config.json'
import formatPhone from '@/functions/formatPhone'

import { defineComponent } from 'vue'

import ContactScreen  from '@@/screens/ContactScreen.vue'
import LocationScreen from '@@/screens/LocationScreen.vue'
import MainEmail      from '@@/bits/MainEmail.vue'
import MainPhone      from '@@/bits/MainPhone.vue'
import OrderScreen    from '@@/screens/OrderScreen.vue'
import TopScreen      from '@@/screens/TopScreen.vue'

export default defineComponent({
	name: 'Sprautuverk',

	components: {
		ContactScreen,
		LocationScreen,
		MainEmail,
		MainPhone,
		OrderScreen,
		TopScreen
	},

	setup () {
		return { config, formatPhone }
	}
})
</script>