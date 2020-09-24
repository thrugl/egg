import config from './config.json'
import router from './router'
import useTemplateHelpers from '#/useTemplateHelpers'

import { createApp } from 'vue'

import Sprautuverk from './Sprautuverk.vue'

import '%/style.css'

createApp(Sprautuverk)
	.use(router)
	.use({
		install: (app) => {
			app.config.globalProperties = {
				$c: config,
				...useTemplateHelpers(),
				...app.config.globalProperties
			}
		}
	})
	.mount('#sprautuverk')