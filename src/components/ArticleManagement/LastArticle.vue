<template>
  <!-- eslint-disable -->
  <div id="lastArticle">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md4 v-for="article in articleList" :key="article.id">
          <h2 v-html="article.title" />
          <div>TAG : <span v-html="article.tag" /></div>
          <i><span>This article was created the </span><span v-html="article.date" /></i>
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
    articleList: []
  }),
  mounted () {
    axios.post('http://localhost:3000/api/v1/article/all', {

    }).then(response => {
      response.data.forEach(e => {
        this.articleList.push(e)
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
