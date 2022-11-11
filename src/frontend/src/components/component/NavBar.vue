<template>
	<header>
		<b-navbar
			variant="primary"
			style="justify-content: space-between"
		>
			<div
				style="margin-left: 20px"
			>
				<b-navbar-brand href="#">{{ getProjectName }}</b-navbar-brand>
			</div>
			
			<div
				style="margin-right: 20px"
			>
				<b-button @click="moveLoginPage()">sign in</b-button>
			</div>
		</b-navbar>
	</header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'getProjectName'
		]),
	},
	methods: {
		moveLoginPage() {
			this.$router.push('/login').catch(() => {})
		}
	}
}
</script>

<style>

</style>