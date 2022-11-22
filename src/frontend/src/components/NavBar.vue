<template>
	<v-app-bar app color="primary" dark>
		<div class="d-flex align-center">
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-2"
				contain
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
				transition="scale-transition"
				width="40"
			/>

			<v-btn href="/" text>
				<h1 style="margin: auto">{{getProjectName}}</h1>
			</v-btn>
		</div>

		<v-spacer></v-spacer>

		<v-btn text href="/regist"> SIGN UP </v-btn>

		<v-btn href="/login">
			<span class="mr-2">SIGN IN</span>
			<v-icon>mdi-login-variant</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getProjectName"]),
	},
	methods: {
		moveLoginPage() {
			this.$router.push("/login").catch(() => {});
		},
	},
};
</script>

<style></style>
