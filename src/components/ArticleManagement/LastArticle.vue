<template>
  <div id="lastArticle">
    <div v-if="this.showArticle === 'false'">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 v-for="article in articleList" :key="article.id">
            <!-- <h2 v-html="article.title" />
            <div>TAG : <span v-html="article.tag" /></div>
            <i><span>This article was created the </span><span v-html="article.date" /></i> -->
            <ArticleCard :article="article" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-else>
      <Article :article="this.article" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ArticleCard from './ArticleCard'
import Article from '../Article/Article'
export default {
  name: 'LastArticle',
  components: {
    ArticleCard,
    Article
  },
  data: () => ({
    articleList: [],
    article: Object,
    showArticle: 'false'
  }),
  mounted () {
    axios.post('http://localhost:3000/api/v1/article/all', {

    }).then(response => {
      response.data.forEach(e => {
        this.articleList.push(e)
      })
    })
  },
  methods: {
    testParent () {
      console.log('parent')
    }
  }
}
</script>

<style>
#lastArticle .eachArticle{
  margin-bottom:15px;
}
</style>
