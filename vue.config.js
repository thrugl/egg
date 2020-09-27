const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/'),
				'@@': path.resolve(__dirname, './src/components/'),
				'%': path.resolve(__dirname, './src/assets/'),
				'#': path.resolve(__dirname, './src/composables/')
			}
		},
		plugins: [
			new PrerenderSPAPlugin(
				path.resolve(__dirname, 'dist'),
				[ '/']
			),
		]
	},
  lintOnSave: false
}