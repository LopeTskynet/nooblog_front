<template>
  <div id="existantTechnicalSheet">
    <v-container grid-list-md v-if="!this.modification">
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="item in technicalSheetList" :key="item._id">
          <div class="cardArticle">
            <h2>{{ item.name }}</h2>
            <v-btn @click="showTS(item)">Manage</v-btn>
          </div>
        </v-flex>

      </v-layout>
    </v-container>
    <v-container grid-list-md v-else>
      <v-layout row wrap>
        <v-flex xs12>
          <ExistantTSEdition :tsobject="this.technicalSheet" />
          <v-btn @click="returnToList()">Retour à la liste des articles</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
import ExistantTSEdition from '@/components/TechnicalSheetManagement/ExistantTSEdition'
const backend = require('../../../config/backend.conf')
export default {
  name: 'ExistantTechnicalSheet',
  components: {
    ExistantTSEdition
  },
  data: () => ({
    technicalSheetList: [],
    technicalSheet: '',
    modification: false
  }),
  mounted () {
    axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/technicalsheet/getfinish', {
      pseudo: this.$store.getters.getPseudo,
      token: this.$store.getters.getToken
    }).then(response => {
      response.data.forEach(e => {
        this.technicalSheetList.push(e)
      })
    }).catch(err => {
      console.error(err)
    })
  },
  methods: {
    returnToList () {
      this.modification = false
      this.technicalSheet = ''
    },
    showTS (technicalsheet) {
      this.technicalSheet = technicalsheet
      this.modification = true
      console.log(this.technicalSheet.effects.physic.name)
    }
  }
}
</script>
<style scoped>
</style>
