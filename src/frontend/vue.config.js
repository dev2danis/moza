const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	outputDir: "../main/resources/static",
	devServer: {
		proxy: 'http://localhost:9000'
	}
})
