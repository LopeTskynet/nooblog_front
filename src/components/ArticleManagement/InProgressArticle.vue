<template>
  <div id="inProgressArticle">
    <v-container grid-list-md v-if="!this.modification">
      <v-layout row wrap>
        <v-flex xs12 v-for="article in articleList" :key="article._id">
          <div class="cardArticle">
            <ArticleCard :article="article" />
            <v-btn class="btnManage" @click="showArticle(article)">Manage</v-btn>
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
import ArticleCard from './ArticleCard'
import ArticleModification from '@/components/ArticleManagement/ArticleModification'
const backend = require('../../../config/backend.conf')
export default {
  name: 'InProgressArticle',
  components: {
    ArticleModification,
    ArticleCard
  },
  data: () => ({
    articleList: [],
    article: '',
    modification: false,
    dialog: false
  }),
  mounted () {
    axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/article/inprogress', {
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
    },
    deleteArticle () {
      console.log(this.$store.getters.getPseudo)
      console.log(this.$store.getters.getToken)
      console.log(this.article._id)
      axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/article/delete', {
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
<style scoped>
#app #inProgressArticle .cardArticle{
  position: relative;
}
#app #inProgressArticle .cardArticle .btnManage{
  position: absolute;
  top: 28%;
  right: 10px;
}
.popupTheme{
  background:white;
}
</style>
