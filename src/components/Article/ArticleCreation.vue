<template>
  <!-- eslint-disable -->
  <div id="articleCreation">
    test
    <v-form ref="form" lazy-validation>
      <wysiwyg id="myEditor" v-model="myHTML" />
    </v-form>
    <v-btn @click="saveArticle">test savingArticle</v-btn>
  </div>
  <!-- eslint-enable -->
</template>

<script>
export default {
  name: 'ArticleCreation',
  data: () => ({
    myHTML: ''
  }),
  methods: {
    saveArticle () {
      console.log(document.getElementById('myEditor').childNodes[1].innerHTML)
    }
  }
}
</script>

<style>

</style>
