<template>
  <div id="connexion">
    <div class="formConnect">
      <h2>Connexion</h2>
      <v-container grid-list-md>
        <v-layout row wrap>

          <v-flex md3 />

          <v-flex md6>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              />
              <v-text-field
                :append-icon="e3 ? 'visibility' : 'visibility_off'"
                @click:append-icon-cb="() => (e3 = !e3)"
                :type="e3 ? 'password' : 'text'"
                v-model="password"
                name="input-10-2"
                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                placeholder="Password"
                class="input-group--focused"
              />
              <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-flex>

          <v-flex md3 />

        </v-layout>

        <v-layout row wrap>
          <v-flex md3 />

          <v-flex md6>
            <p>
              <router-link :to="{name:'Inscription'}">Pas encore inscrit ? Cliquer ici pour le faire de suite !</router-link>
            </p>
          </v-flex>

          <v-flex md3 />
        </v-layout>

      </v-container>
      <v-btn @click="submit2">test</v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const backend = require('../../../config/backend.conf')
export default {
  data: () => ({
    valid: true,
    name: '',
    password: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 12) || 'Name must be less than 10 characters'
    ],
    e3: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log(this.name)
        console.log(this.password)
        axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/users/connection', {
          pseudo: this.name,
          password: this.password
        }).then(response => {
          if (response.data) {
            sessionStorage.first_name = response.data.first_name
            sessionStorage.last_name = response.data.last_name
            sessionStorage.pseudo = response.data.pseudo
            sessionStorage.email = response.data.email
            sessionStorage.token = response.data.token
            sessionStorage.role = response.data.role
            sessionStorage.isConnected = true
            this.$store.commit('setFirstName', response.data.first_name)
            this.$store.commit('setLastName', response.data.last_name)
            this.$store.commit('setPseudo', response.data.pseudo)
            this.$store.commit('setEmail', response.data.email)
            this.$store.commit('setToken', response.data.token)
            this.$store.commit('setRole', response.data.role)
            this.$store.commit('setIsConnected', true)
            this.$router.push('/')
            console.log('the user is now connected')
          } else {
            console.log('bad login or password')
          }
        }).catch(error => {
          console.error(error)
        })
      }
    },
    submit2 () {
      axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/users/connection', {
        pseudo: 'test',
        password: 'testtest'
      }).then(response => {
        console.log('response value :' + response.data)
        if (response.data) {
          console.log(response.data)
          sessionStorage.first_name = response.data.first_name
          sessionStorage.last_name = response.data.last_name
          sessionStorage.pseudo = response.data.pseudo
          sessionStorage.email = response.data.email
          sessionStorage.token = response.data.token
          sessionStorage.role = response.data.role
          sessionStorage.isConnected = true
          this.$store.commit('setFirstName', response.data.first_name)
          this.$store.commit('setLastName', response.data.last_name)
          this.$store.commit('setPseudo', response.data.pseudo)
          this.$store.commit('setEmail', response.data.email)
          this.$store.commit('setToken', response.data.token)
          this.$store.commit('setRole', response.data.role)
          this.$store.commit('setIsConnected', true)
          console.log('store :' + this.$store.state.first_name)
          this.$router.push('/')
        } else {
          console.log('bad login or password')
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>
#connexion .formConnect{
  background:rgba(66,165,245,0.7);
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
}
#connexion .formConnect form{
  padding:10px;
}
#connexion .formConnect form button, .input-group__input{
  background:white;
}
</style>
