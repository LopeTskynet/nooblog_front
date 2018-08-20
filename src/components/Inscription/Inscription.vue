<template>
  <div id="inscription">
    <div class="containerInscription">
      <v-container grid-list-md>
        <v-layout row wrap>

          <v-flex md3 />

          <v-flex md6>

            <h2>Enregister vous, c'est gratuit !</h2>
            <v-subheader>Bienvenue sur le blog Nooblog</v-subheader>

            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              />
              <v-text-field
                v-model="firstname"
                :rules="firstNameRules"
                label="Prénom"
                required
              />
              <v-text-field
                v-model="lastname"
                :rules="lastNameRules"
                label="Nom"
                required
              />
              <v-text-field
                v-model="pseudo"
                :rules="pseudoRules"
                label="Pseudo"
                required
              />
              <v-text-field
                :append-icon="e3 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e3 = !e3)"
                :type="e3 ? 'password' : 'text'"
                :rules="passwordRules"
                v-model="password"
                name="input-10-2"
                hint="At least 8 characters"
                min="8"
                placeholder="Mot de passe"
                class="input-group--focused"
              />
              <v-text-field
                :append-icon="e3 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e3 = !e3)"
                :type="e3 ? 'password' : 'text'"
                v-model="passwordVerif"
                name="input-10-2"
                hint="At least 8 characters"
                min="8"
                placeholder="Entrer à nouveau votre mot de passe"
                class="input-group--focused"
              />

              <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>

          </v-flex>

          <v-flex md3 />
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Inscription',
  data: () => ({
    valid: false,
    email: '',
    firstname: '',
    lastname: '',
    pseudo: '',
    password: '',
    passwordVerif: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    firstNameRules: [
      v => !!v || 'Le prénom est requis',
      v => v.length <= 12 || 'Le prénom ne doit pas dépasser 12 caractères'
    ],
    lastNameRules: [
      v => !!v || 'Le nom est requis',
      v => v.length <= 12 || 'Le nom ne doit pas dépasser 12 caractères'
    ],
    pseudoRules: [
      v => !!v || 'Le pseudo est requis',
      v => v.length <= 10 || 'Le nom ne doit pas dépasser 10 caractères'
    ],
    passwordRules: [
      v => !!v || 'Le mot de passe est requis',
      v => v.length >= 8 || 'Le nom doit être composé d\'au moins huit caractères '
    ],
    e3: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        if (this.password === this.passwordVerif) {
          axios.post('http://localhost:3000/api/v1/users', {
            pseudo: this.pseudo,
            password: this.password,
            email: this.email,
            first_name: this.firstname,
            last_name: this.lastname
          }).then(response => {
            console.log(response)
          }).catch((error) => {
            console.error(error)
          })
        } else {
          console.log('bad password')
        }
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>
#inscription .containerInscription{
  background:rgba(66,165,245,0.7);
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
}
#inscription .containerInscription form{
  padding:10px;
}
#inscription .containerInscription form button, .input-group__input{
  background:white;
}
</style>
