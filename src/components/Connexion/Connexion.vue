<template>
  <!-- eslint-disable -->
  <div id="connexion">
    <h2>Connexion</h2>
    <div class="formConnect">
      <v-container grid-list-md>
        <v-layout row wrap>

          <v-flex md3>
          </v-flex>

          <v-flex md6>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required>
              </v-text-field>
              <v-text-field
                :append-icon="e3 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e3 = !e3)"
                :type="e3 ? 'password' : 'text'"
                v-model="password"
                name="input-10-2"
                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                placeholder="Password"
                class="input-group--focused">
              </v-text-field>
              <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-flex>

          <v-flex md3>
          </v-flex>

        </v-layout>

      </v-container>
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    password: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    e3: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log(this.name)
        console.log(this.password)
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>

</style>
