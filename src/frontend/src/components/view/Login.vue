<template>
    <div
        style="display: flex"
    >
        <b-card
            style="max-width: 400px"
        >
            <b-form class="form-control-sm">
                <b-form-group
                    id="input-group-id"
                    label="ID:"
                    label-for="input-id"
                >
                    <b-form-input
                        id="input-id"
                        placeholder="ID"
                        required
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-password"
                    label="PASSWORD"
                    label-for="input-password"
                >
                    <b-form-input
                        id="input-password"
                        type="password"
                        required
                    >
                    </b-form-input>
                </b-form-group>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>