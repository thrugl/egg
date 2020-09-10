const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
      alias: {
				'@': path.resolve(__dirname, './src/'),
				'@@': path.resolve(__dirname, './src/components/'),
				'%': path.resolve(__dirname, './src/assets/'),
				'#': path.resolve(__dirname, './src/composables/')
      }
    }
	},
  lintOnSave: false
}