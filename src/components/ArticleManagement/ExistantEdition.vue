<template>
  <div id="existantEdition">
    <v-container grid-list-md v-if="!this.modification">
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="article in articleList" :key="article._id">
          <div class="cardArticle">
            <h2>{{ article.title }}</h2>
            <v-btn @click="showArticle(article)">Manage</v-btn>
          </div>

        </v-flex>

      </v-layout>
    </v-container>
    <v-container grid-list-md v-else>
      <v-layout row wrap>
        <v-flex xs12>
          <ArticleModification :article="this.article" />
          <v-dialog v-model="dialog" persistent max-width="300">
            <v-btn slot="activator">Delete</v-btn>
            <v-card class="popupTheme">
              <v-card-title class="headline">Supprimer l'article?</v-card-title>
              <v-card-text>Voulez-vous vraiment supprimer l'article ?<br>Attention la suppression est définitive.</v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="green darken-1" flat @click.native="dialog = false">Annuler</v-btn>
                <v-btn color="green darken-1" flat @click.native="dialog = false, deleteArticle()">Supprimer</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn @click="returnToList()">Retour à la liste des articles</v-btn>
          <br>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
import ArticleModification from '@/components/ArticleManagement/ArticleModification'
export default {
  name: 'ExistantEdition',
  components: {
    ArticleModification
  },
  data: () => ({
    articleList: [],
    article: '',
    modification: false,
    dialog: false
  }),
  mounted () {
    axios.post('http://localhost:3000/api/v1/article/all', {
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
    },
    deleteArticle () {
      console.log(this.$store.getters.getPseudo)
      console.log(this.$store.getters.getToken)
      console.log(this.article._id)
      axios.post('http://localhost:3000/api/v1/article/delete', {
        pseudo: this.$store.getters.getPseudo,
        token: this.$store.getters.getToken,
        id: this.article._id
      })
      let i = 0
      this.articleList.forEach(item => {
        if (this.article._id === item._id) {
          this.articleList.splice(i, 1)
        }
        i++
      })
      this.modification = false
    }
  }
}
</script>
<style  scoped>
#app #existantEdition .cardArticle{
  box-shadow:2px 2px 2px 2px hsla(38,16%,76%,.5);
  border-radius:6px;
}
.popupTheme{
  background:white;
}
</style>
