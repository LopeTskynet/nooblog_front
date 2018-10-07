<template>
  <div id="articlePreview">
    <div>
      <h3>Title :</h3>{{ title }}
    </div>
    <div>
      <h3>Tags :</h3>
      <span v-for="value in tag" :key="value"> {{ value }} </span>
    </div>
    <h3>Article :</h3>
    <div v-html="article">
      {{ article }}
    </div>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-container>
        <v-layout>
          <v-flex md=6>
            <v-radio label="Sauvegarder temporairement l'article" value="false" />
          </v-flex>
          <v-flex md=6>
            <v-radio label="Valider l'article" value="true" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-radio-group>
    <v-btn @click="submit">Valider</v-btn>
  </div>
</template>

<script>
import axios from 'axios'
const backend = require('../../../config/backend.conf')
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
    },
    'isExist': {
      type: String,
      required: false,
      default: ''
    }
  },
  data: () => ({
    radios: 'false'
  }),
  methods: {
    submit () {
      if (this.article && this.isExist === '') {
        axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/article/create', {
          article: this.article,
          title: this.title,
          tag: this.tag,
          isFinish: this.radios,
          pseudo: this.$store.getters.getPseudo,
          token: this.$store.getters.getToken
        }).then(response => {
          if (response.data) {
            console.log(response.data)
          } else {
            console.log('error')
          }
        }).catch(err => {
          console.error(err)
        })
      } else if (this.article) {
        axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/article/modification', {
          article: this.article,
          title: this.title,
          tag: this.tag,
          isFinish: this.radios,
          pseudo: this.$store.getters.getPseudo,
          token: this.$store.getters.getToken,
          id: this.isExist
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
