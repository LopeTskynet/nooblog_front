<template>
  <!-- eslint-disable -->
  <div id="articleCreation">
    test
    <div v-if="!this.preview">
      <v-form ref="form" lazy-validation>
        <wysiwyg id="myEditor" v-model="myHTML" />
      </v-form>
    </div>
    <div v-else>
      <ArticlePreview v-bind:article="this.test"></ArticlePreview>
    </div>
    <v-btn @click="saveArticle">
      <span v-if="!this.preview">Show the preview</span>
      <span v-else>Back to the editor</span>
    </v-btn>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import ArticlePreview from './ArticlePreview'
export default {
  name: 'ArticleCreation',
  components: {
    ArticlePreview
  },
  data: () => ({
    myHTML: '',
    preview: false,
    test: 'tes2t'
  }),
  methods: {
    saveArticle () {
      // console.log(document.getElementById('myEditor').childNodes[1].innerHTML)
      if (this.preview === false) {
        this.test = document.getElementById('myEditor').childNodes[1].innerHTML
        this.preview = true
      } else {
        this.preview = false
      }
    }
  }
}
</script>

<style>

</style>
