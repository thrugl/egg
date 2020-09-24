import config      from './config.json'
import router      from './router'
import useTailwind from '#/useTailwind'

import { createApp } from 'vue'

import Sprautuverk from './Sprautuverk.vue'

import '%/style.css'

createApp(Sprautuverk)
	.use(router)
	.use({
		install: (app) => {
			app.config.globalProperties = {
				$c: config,
				$t: useTailwind().cl,
				$bgImg: useTailwind().bgImg,
				$windowHeight: () => window.innerHeight,
				$windowWidth: () => window.innerWidth,
				...app.config.globalProperties
			}
		}
	})
	.mount('#sprautuverk')