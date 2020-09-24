<template>
	<TopScreen/>
	<OrderScreen/>
	<LocationScreen/>
	<ContactScreen class="z-10">
	</ContactScreen>

	<TheFooter class="relative -mt-12 z-50"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ContactScreen  from '@@/screens/ContactScreen.vue'
import LocationScreen from '@@/screens/LocationScreen.vue'
import OrderScreen    from '@@/screens/OrderScreen.vue'
import TheFooter      from '@@/blocks/TheFooter.vue'
import TopScreen      from '@@/screens/TopScreen.vue'

export default defineComponent({
	name: 'Sprautuverk',

	components: {
		ContactScreen,
		LocationScreen,
		OrderScreen,
		TheFooter,
		TopScreen
	}
})
</script>