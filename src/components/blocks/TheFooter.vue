<template>
	<footer class="text-center text-white">
		<small>
			<span>Sprautuverk ehf, kt. 123456-1200</span>
			<br class="lg:hidden"/> 
			<span class="lg:ml-4">{{ $c.address[1] }}, {{ $c.city[1] }}</span>
			<br class="lg:hidden"/> 
			<MainPhone size="3" class="lg:ml-4"/> 
			<MainEmail size="3" class="ml-4"/>
		</small>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


import MainEmail from '@@/bits/MainEmail.vue'
import MainPhone from '@@/bits/MainPhone.vue'

export default defineComponent({
	name: 'TheFooter',

	components: {
		MainEmail,
		MainPhone
	}
})
</script>