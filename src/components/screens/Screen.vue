<template>
	<component :is="tag" :id="id" :class="{
		'text-white relative': true,
		'bg-fixed bg-contain bg-no-repeat bg-bottom': true,
		'gray-gradient': gradient,
		'border-b border-gray-900': !noBorder
	}">
		<div :class="{
			'relative h-full w-full': true,
			'px-6 py-24': !noPadding,
			[tintColor]: tint
		}">
			<div class="container relative">
				<header>
					<h2 v-if="heading" class="text-orange-600 mb-2 lg:text-4xl lg:text-center">
						{{ heading }}
					</h2>
				</header>
				<slot/>
			</div>
		</div>
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Screen',

	props: {
		id: { type: String, default: '' },
		heading: { type: String, default: '' },
		tag: { type: String, default: 'section' },
		gradient: { type: Boolean, default: false },
		noPadding: { type: Boolean, default: false },
		noBorder: { type: Boolean, default: false },
		tint: { type: String, default: '' }
	},
	
	setup (props) {
		return {
			tintColor: `bg-${props.tint} bg-opacity-25`
		}
	}
})
</script>