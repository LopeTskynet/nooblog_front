<template>
  <div id="allThingsToKnowCreation">
    <div class="container">
      <h3>
        Ajout d'une question réponse :
      </h3>
      <div class="container">
        <v-form>
          <v-text-field v-model="question" label="Question" required />
          <v-textarea
            name="answer"
            box
            label="Answer here"
            auto-grow
            placeholder="Renseigner la réponse içi."
            v-model="answer"
          />
        </v-form>
        <v-btn @click="validForm">
          Send to backend
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const backend = require('../../../config/backend.conf')
export default {
  name: 'AllThingsToKnowCreation',
  data: () => ({
    question: '',
    answer: ''
  }),
  methods: {
    validForm () {
      console.log('validForm')
      console.log(this.question)
      axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/userthings/thingstoknow/create', {
        token: this.$store.getters.getToken,
        pseudo: this.$store.getters.getPseudo,
        question: this.question,
        answer: this.answer
      })
    }
  }
}
</script>
<style scoped>
</style>
