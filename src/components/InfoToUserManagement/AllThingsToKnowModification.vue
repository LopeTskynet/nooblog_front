<template>
  <div id="allThingsToKnowModification">
    <div class="container">
      <h2>
        Modification de la question/réponse :
      </h2>
      <v-form>
        <v-text-field v-model="thing.question" label="Question" required />
        <v-textarea
          name="answer"
          box
          label="Answer here"
          auto-grow
          placeholder="Renseigner la réponse içi."
          v-model="thing.answer"
        />
      </v-form>
      <v-btn @click="saveIntoBdd()">
        Save into bdd
      </v-btn>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AllThingsToKnowModification',
  props: {
    thing: {
      type: Object,
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    saveIntoBdd  () {
      console.log(this.thing.answer)
      axios.post('http://localhost:3000/api/v1/userthings/thingstoknow/update', {
        pseudo: this.$store.getters.getPseudo,
        token: this.$store.getters.getToken,
        thing: this.thing
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
<style scoped>
</style>
