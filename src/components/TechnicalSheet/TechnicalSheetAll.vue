<template>
  <div>Something</div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    technicalSheetList: []
  }),
  mounted () {
    axios.get('localhost:3000/api/v1/technicalsheet/getall', {

    }).then(response => {
      response.data.forEach(e => {
        this.technicalSheetList.push(e)
      })
    })
  }
}
</script>

<style scoped>

</style>
