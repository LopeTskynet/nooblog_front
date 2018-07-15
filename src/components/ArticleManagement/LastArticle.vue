<template>
  <!-- eslint-disable -->
  <div id="lastArticle">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md4 v-for="item in article">
          <h2 v-html="item.title" />
          <div>TAG : <span v-html="item.tag" /></div>
          <i><span>This article was created the </span><span v-html="item.date" /></i>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
  <!-- eslint-enable -->
</template>

<script>
import axios from 'Axios'
export default {
  name: 'LastArticle',
  data: () => ({
    article: []
  }),
  mounted () {
    axios.post('http://localhost:3000/api/v1/article/all', {

    }).then(response => {
      response.data.forEach(e => {
        this.article.push(e)
      })
    })
  }
}
</script>

<style>
#lastArticle .eachArticle{
  margin-bottom:15px;
}
</style>
