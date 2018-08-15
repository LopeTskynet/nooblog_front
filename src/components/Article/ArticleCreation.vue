<template>
  <div id="articleCreation">
    <div v-if="!this.preview">
      <v-text-field
        id="title"
        v-model="title"
        label="Title of this article"
        required
      />
      <v-text-field
        id="tag"
        v-model="tag"
        label="Enter tags here, you must separate tags by a space like this : ' ' "
        required
      />
    </div>
    <div v-if="!this.preview">
      <v-form ref="form" lazy-validation>
        <wysiwyg id="myEditor" v-model="myHTML" />
      </v-form>
    </div>
    <div v-else>
      <ArticlePreview :article="this.article" :title="this.title" :tag="this.tag" />
    </div>
    <v-btn @click="saveArticle">
      <span v-if="!this.preview">Show the preview</span>
      <span v-else>Back to the editor</span>
    </v-btn>
  </div>
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
    title: 'te',
    tag: 'te',
    article: ''
  }),
  methods: {
    saveArticle () {
      // console.log(document.getElementById('myEditor').childNodes[1].innerHTML)
      if (this.preview === false) {
        this.article = document.getElementById('myEditor').childNodes[1].innerHTML
        this.title = document.getElementById('title').value
        this.tag = document.getElementById('tag').value
        console.log(document.getElementById('title').innerHTML)
        this.tag = this.tag.split(' ')
        console.log(this.tag)
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
