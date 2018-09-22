<template>
  <div>
    <div class="containerArticle text-xs-left">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <h2 class="text-xs-center display-1 paddingTitle">{{ article.title }}</h2>
            <div v-html="article.article">
              {{ article.article }}
            </div>
            <h3>
              Tag :
              <v-chip v-for="label in article.tag" label small color="blue" text-color="white" :key="label">
                <v-icon left>label</v-icon>{{ label }}
              </v-chip>
            </h3>
            <p>
              {{ article.date }}
            </p>
            <v-btn @click="backToListArticle">Retour à la liste d'article</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    backToListArticle () {
      this.$parent._data.showArticle = 'false'
      this.$parent._data.article = null
    }
  }
}
</script>

<style scoped>
#app .containerArticle .paddingTitle{
  margin-bottom: 45px;
}
</style>
