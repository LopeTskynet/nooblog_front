<template>
  <!-- eslint-disable -->
  <div id="articlePreview">
    <div>
      <h3>Title :</h3>{{ title }}
    </div>
    <div>
      <h3>Tags :</h3>
      <span v-for="value in tag"> {{ value }} </span>
    </div>
    <h3>Article :</h3>
    <div v-html="article">
      {{ article }}
    </div>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-container>
        <v-layout>
          <v-flex md=6>
            <v-radio label="Sauvegarder temporairement l'article" value="false"></v-radio>
          </v-flex>
          <v-flex md=6>
            <v-radio label="Valider l'article" value="true"></v-radio>
          </v-flex>
        </v-layout>
      </v-container>
    </v-radio-group>
    <v-btn @click="submit">Valider</v-btn>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import axios from 'Axios'
export default {
  name: 'ArticlePreview',
  props: {
    'article': {
      type: String,
      required: true
    },
    'title': {
      type: String,
      required: true
    },
    'tag': {
      type: Array,
      required: true
    }
  },
  data: () => ({
    radios: 'false'
  }),
  methods: {
    submit () {
      if (this.article) {
        console.log(typeof this.radios)
        axios.post('http://localhost:3000/api/v1/article', {
          article: this.article,
          title: this.title,
          tag: this.tag,
          isFinish: this.radios
        }).then(response => {
          if (response.data) {
            console.log(response.data)
          } else {
            console.log('error')
          }
        }).catch(err => {
          console.error(err)
        })
      }
    }
  }
}
</script>

<style>

</style>
