<template>
	<component :is="tag" :id="id" :ref="e => self = e" 
		:style="{ height, ...$bgImg(`car-${image}.jpg`, image) }" 
		:class="$t(
			'text-white relative h-full',
			'bg -> -fixed -contain -no-repeat -bottom',
			'lg: -> min-h-screen',
			{ 'border -> -b-4 -gray-900': !noBorder }
	)">
		<div :style="$bgImg(`tint-${tint}.png`, tint)" :class="$t(
			'relative h-full w-full lg:min-h-screen flex justify-center items-center',
			{ 'p -> x-6': !noPadding,
				'bg-cover bg-no-repeat shadow-inner': tint }
		)">
			<div class="container flex-initial py-12">
				<header>
					<h2 v-if="heading" :class="$t(
						'text-orange-600 mb-2',
						'lg:text -> -4xl -center'
					)">
						{{ heading }}
					</h2>
				</header>
				<slot/>
			</div>
		</div>
	</component>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watchEffect } from 'vue';

const count = ref<number>(0)

export default defineComponent({
	name: 'Screen',

	props: {
		id: { type: String, default: `screen-${count.value}` },
		heading: { type: String, default: '' },
		tag: { type: String, default: 'section' },
		gradient: { type: Boolean, default: false },
		noPadding: { type: Boolean, default: false },
		noBorder: { type: Boolean, default: false },
		tint: { type: [Number, String], default: 0 },
		image: { type: [Number, String], default: 0 }
	},

	setup (props) {
		const self   = ref<Data>({})
		const height = ref<string>('')

		count.value++

		function calcHeight () {
			const eh = self?.value?.offsetHeight ?? window.innerHeight
			const wh = window.innerHeight

			height.value = `${wh > eh ? wh : eh}px`
		}

		onMounted(() => {
			calcHeight()
			window.addEventListener('resize', calcHeight)
		})

		return { height, self }
	}
})
</script>