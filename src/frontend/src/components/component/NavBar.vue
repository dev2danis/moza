<template>
	<header>
		<b-navbar
			variant="primary"
		>
			<b-navbar-brand href="#">{{ getProjectName }}</b-navbar-brand>
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
	}
}
</script>

<style>

</style>