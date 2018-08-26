<template>
  <div id="inProgressArticle">
    <v-container grid-list-md v-if="!this.modification">
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="article in articleList" :key="article._id">
          <div class="cardArticle">
            <h2>{{ article.title }}</h2>
            <v-btn color="indigo lighten-2" @click="showArticle(article)">Manage</v-btn>
          </div>

        </v-flex>

      </v-layout>
    </v-container>
    <v-container grid-list-md v-else>
      <v-layout row wrap>
        <v-flex xs12>
          <ArticleModification :article="this.article" />
          <v-btn @click="returnToList()">Retour à la liste des articles</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>
<script>
import axios from 'axios'
import ArticleModification from '@/components/ArticleManagement/ArticleModification'
export default {
  name: 'InProgressArticle',
  components: {
    ArticleModification
  },
  data: () => ({
    articleList: [],
    article: '',
    modification: false
  }),
  mounted () {
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
  },
  methods: {
    showArticle (article) {
      this.article = article
      this.modification = true
    },
    returnToList () {
      this.modification = false
      this.article = ''
    }
  }
}
</script>
<style scoped>
#app #inProgressArticle .cardArticle{
  box-shadow:2px 2px 2px 2px hsla(38,16%,76%,.5);
  border-radius:6px;
}
</style>
