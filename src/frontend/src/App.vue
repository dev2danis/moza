<template>
	<div id="app">
		<nav-bar></nav-bar>
		<Home/>
	</div>
</template>

<script>
import NavBar from '@/components/component/NavBar.vue'
import Home from '@/components/view/Home.vue'

export default {
	name: 'App',
	components: {
		Home,
		NavBar
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
