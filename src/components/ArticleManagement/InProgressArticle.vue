<template>
  <div id="inProgressArticle">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="article in articleList" :key="article.id">
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="title mb-0" v-html="article.title" />
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn color="orange">Editer</v-btn>
              <v-btn color="red">Supprimer</v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from 'Axios'
export default {
  name: 'InProgressArticle',
  data: () => ({
    articleList: []
  }),
  mounted () {
    console.log('test mounted')
    axios.post('http://localhost:3000/api/v1/article/inprogress', {
      pseudo: this.$store.getters.getPseudo,
      token: this.$store.getters.getToken
    }).then(response => {
      response.data.forEach(e => {
        this.articleList.push(e)
      })
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>
<style scoped>
/*
<h2 v-html="article.title" />
<div>TAG : <span v-for="item in article.tag" :key="item">{{ item }}, </span></div>
<i><span>This article was created the </span><span v-html="article.date" /></i>
*/
</style>
