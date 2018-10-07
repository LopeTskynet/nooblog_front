<template>
  <div id="lastTechnicalSheet">
    <div v-if="this.showTechnicalsheet === 'false'">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 v-for="technicalsheet in technicalsheetTab" :key="technicalsheet.id">
            <TechnicalSheetCard :technicalsheet="technicalsheet" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-else>
      <TechnicalSheet :technical-sheet="this.technicalsheet" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import TechnicalSheetCard from './TechnicalSheetCard'
import TechnicalSheet from '../TechnicalSheet/TechnicalSheet'
const backend = require('../../../config/backend.conf')
export default {
  name: 'LastTechnicalSheet',
  components: {
    TechnicalSheetCard,
    TechnicalSheet
  },
  data: () => ({
    technicalsheetTab: [],
    technicalsheet: Object,
    showTechnicalsheet: 'false'
  }),
  mounted () {
    console.log('test')
    axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/technicalsheet/getfinish', {
    })
      .then(response => {
        console.log(response.data[0].name)
        response.data.forEach(item => {
          this.technicalsheetTab.push(item)
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>
<style scoped>
</style>
