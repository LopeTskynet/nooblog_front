<template>
  <div id="ArticleCard">
    <div class="containerArticle text-xs-left">
      <h3>{{ article.title }}</h3>
      <p class="subtitle" @click="loadArticle()">
        Article posté le {{ this.date.day }} {{ this.date.month }} {{ this.date.year }}
      </p>
      <v-chip v-for="label in article.tag" label small color="blue" text-color="white" :key="label">
        <v-icon left>label</v-icon>{{ label }}
      </v-chip>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleCard',
  props: {
    'article': {
      type: Object,
      required: true
    }
  },
  data: () => ({
    date: {
      day: '',
      month: '',
      year: ''
    }
  }),
  mounted () {
    this.date.day = this.article.date.slice(8, 10)
    this.date.year = this.article.date.slice(0, 4)
    switch (this.article.date.slice(5, 7)) {
      case '01':
        this.date.month = 'Janvier'
        break
      case '02':
        this.date.month = 'Février'
        break
      case '03':
        this.date.month = 'Mars'
        break
      case '04':
        this.date.month = 'Avril'
        break
      case '05':
        this.date.month = 'Mai'
        break
      case '06':
        this.date.month = 'Juin'
        break
      case '07':
        this.date.month = 'Juillet'
        break
      case '08':
        this.date.month = 'Août'
        break
      case '09':
        this.date.month = 'Septembre'
        break
      case '10':
        this.date.month = 'Octobre'
        break
      case '11':
        this.date.month = 'Novembre'
        break
      case '12':
        this.date.month = 'Décembre'
        break
      default:
        this.date.month = 'undefined'
    }
  },
  methods: {
    loadArticle () {
      console.log('loading article')
      this.$parent._data.showArticle = 'true'
      this.$parent._data.article = this.article
    }
  }
}
</script>
<style scoped>
#app #ArticleCard{
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
}
#app #ArticleCard .subtitle {
  color: grey;
  font-style: italic;
}
#app #ArticleCard .containerArticle {
  padding: 10px;
}
</style>
