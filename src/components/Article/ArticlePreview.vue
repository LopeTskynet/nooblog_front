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
    <v-btn @click="submit">test</v-btn>
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
  }),
  methods: {
    submit () {
      if (this.article) {
        console.log(this.article)
        axios.post('http://localhost:3000/api/v1/article', {
          article: this.article,
          title: this.title,
          tag: this.tag
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
