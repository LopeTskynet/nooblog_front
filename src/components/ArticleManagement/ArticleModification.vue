<template>
  <div id="articleModification">
    <h2>Modification d'article</h2>
    <div v-if="!this.preview">
      <h3 class="text-sm-left">Titre :</h3>
      <v-text-field v-model="title" required/>
      <h3 class="text-sm-left">Tags :</h3>
      <v-text-field v-model="tag" required />
      <h3 class="text-sm-left">Corps de l'article :</h3>
      <v-form ref="form" lazy-validation>
        <wysiwyg id="myEditor" v-model="myHTML" />
      </v-form>
    </div>
    <div v-else>
      <ArticlePreview :article="this.myHTML" :title="this.title" :tag="this.tag" :is-exist="this.article._id" />
    </div>
    <v-btn @click="saveArticle">
      <span v-if="!this.preview">Show the preview</span>
      <span v-else>Back to the editor</span>
    </v-btn>
  </div>
</template>
<script>
import ArticlePreview from '@/components/Article/ArticlePreview'
export default {
  name: 'ArticleModification',
  components: {
    ArticlePreview
  },
  props: {
    'article': {
      type: Object,
      required: true
    }
  },
  data: () => ({
    preview: false,
    title: '',
    tag: '',
    myHTML: ''
  }),
  mounted () {
    let tagString = this.article.tag.toString()
    tagString = tagString.replace(new RegExp(',', 'g'), ' ') // convert the array into string and replace all ',' by a space
    this.title = this.article.title
    this.myHTML = this.article.article
    this.tag = tagString
  },
  methods: {
    saveArticle () {
      if (this.preview === false) {
        // TODO : check if we can split or not (bug when you check the preview and come back, the next preview is bad because the split)
        this.tag = this.tag.split(' ')
        this.preview = true
      } else {
        this.preview = false
      }
    }
  }
}
</script>
<style scoped>
</style>
