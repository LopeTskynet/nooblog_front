<template>
  <div>
    <TechnicalSheet v-for="technicalsheet in technicalSheetList" :key="technicalsheet" :technical-sheet="technicalsheet" />
  </div>
</template>

<script>
import axios from 'axios'
import TechnicalSheet from './TechnicalSheet'
export default {
  components: {
    TechnicalSheet
  },
  data: () => ({
    technicalSheetList: []
  }),
  mounted () {
    axios.get('http://localhost:3000/api/v1/technicalsheet/getall', {

    }).then(response => {
      response.data.forEach(e => {
        this.technicalSheetList.push(e)
        console.log(response.data)
      })
    })
  }
}
</script>

<style scoped>

</style>
