const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: [
      'vuetify'
    ],
	outputDir: "../main/resources/static",
	devServer: {
		proxy: 'http://localhost:9000'
	}
})
