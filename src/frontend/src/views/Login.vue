<template>
	<div
		style="
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		"
	>
		<v-card style="width: 400px; height: 300px">
			<form
				style="
					margin-left: 20px;
					margin-right: 20px;
					margin-top: 20px;
					margin-bottom: 20px;
				"
			>
				<h1>Login Form</h1>
				<v-text-field
					v-model="email"
					:rules="emailRules"
					label="E-mail"
					required
				>
				</v-text-field>
				<v-text-field
					v-model="password"
					:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
					:rules="[rules.required, rules.min]"
					:type="show1 ? 'text' : 'password'"
					label="Password"
					hint="At least 8 characters"
					counter
					required
					@click:append="show1 = !show1"
				>
				</v-text-field>
				<v-btn color="primary" style="margin-bottom: 10px">
					Sign in
				</v-btn>
				<p style="margin-bttom: 10px">
					Don't have an account?
					<a href="/regist">Sign up</a>
				</p>
			</form>
		</v-card>
	</div>
</template>

<script>
export default {
	data: () => ({
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
		],
		show1: false,
		rules: {
			required: (value) => !!value || "Required.",
			min: (v) => v.length >= 8 || "Min 8 characters",
		},
	}),
};
</script>

<style></style>
