<template>
  <div id="allThingsToKnow">
    <div class="container">
      <h2>
        Tout ce que vous devez savoir :
      </h2>
      <div class="container text-xs-left">
        <ul>
          <li v-for="item in this.allthings.question.length" :key="item">
            <h3>{{ allthings.question[item - 1] }}</h3>
            {{ allthings.response[item -1] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AllThingsToKnow',
  data: () => ({
    allthings: {
      question: ['test?', 'test2?'],
      response: ['testing', 'testing2']
    }
  })
}
</script>
<style scoped>
</style>
