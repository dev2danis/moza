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
		<v-card style="width: 400px; height: 400px">
			<form
				style="
					margin-left: 20px;
					margin-right: 20px;
					margin-top: 20px;
					margin-bottom: 20px;
				"
			>
				<h1>Register Form</h1>
				<v-text-field
					v-model="email"
					label="Email"
					required
					:error-messages="emailErrors"
					@input="$v.email.$touch()"
					@blur="$v.email.$touch()"
				></v-text-field>
				<v-text-field
					v-model="password"
					label="Password"
					required
					:error-messages="passwordErrors"
					@input="$v.password.$touch()"
					@blur="$v.password.$touch()"
					counter
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showPassword = !showPassword"
					:type="showPassword ? 'text' : 'password'"
				>
				</v-text-field>
				<v-text-field
					v-model="confirm"
					label="Confirm Password"
					required
					:error-messages="confirmErrors"
					@input="$v.confirm.$touch()"
					@blur="$v.confirm.$touch()"
					counter
					:append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showConfirm = !showConfirm"
					:type="showConfirm ? 'text' : 'password'"
				>
				</v-text-field>
				<v-text-field
					v-model="name"
					label="Name"
					required
					:error-messages="nameErrors"
					:counter="10"
					@input="$v.name.$touch()"
					@blur="$v.name.$touch()"
				></v-text-field>

				<v-btn class="mr-4" color="primary" @click="submit">
					submit
				</v-btn>
				<v-btn @click="clear"> clear </v-btn>
			</form>
		</v-card>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength, email } from "vuelidate/lib/validators";

export default {
	mixins: [validationMixin],
	validations: {
		name: { required, maxLength: maxLength(10) },
		email: { required, email },
		password: { required, minLength: minLength(8) },
		confirm: { required, minLength: minLength(8) }
	},
	data: () => ({
		name: "",
		email: "",
		password: "",
		confirm: "",
		showPassword: false,
		showConfirm: false
	}),
	computed: {
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push("Must be valid e-mail");
			!this.$v.email.required && errors.push("E-mail is required");
			return errors;
		},
		nameErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.name.maxLength &&
				errors.push("Name must be at most 10 characters long");
			!this.$v.name.required && errors.push("Name is required.");
			return errors;
		},
		passwordErrors() {
			const errors = [];
			if(!this.$v.password.$dirty) return errors;
			!this.$v.password.minLength && errors.push("Password must be at least 8 characters")
			!this.$v.password.required && errors.push("Password is required")
			return errors;
		},
		confirmErrors() {
			const errors = [];
			if(!this.$v.confirm.$dirty) return errors;
			!this.$v.confirm.required && errors.push("Confirm Password is required")
			!this.$v.confirm.minLength && errors.push("Confirm Password must be at least 8 characters")
			!(this.password == this.confirm) && errors.push("Password must match")
			console.log(this.password == this.confirm)
			return errors;
		}
	},
};
</script>

<style></style>
