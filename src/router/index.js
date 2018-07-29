import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Connexion from '@/components/Connexion/Connexion'
import Inscription from '@/components/Inscription/Inscription'
import Article from '@/components/Article/Article'
import ArticleCreation from '@/components/Article/ArticleCreation'
import ArticlePreview from '@/components/Article/ArticlePreview'
import LastArticle from '@/components/ArticleManagement/LastArticle'
import TechnicalSheet from '@/components/TechnicalSheet/TechnicalSheet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/article/:articleId',
      name: 'Article',
      component: Article
    },
    {
      path: '/creation',
      name: 'ArticleCreation',
      component: ArticleCreation
    },
    {
      path: '/preview',
      name: 'ArticlePreview',
      component: ArticlePreview
    },
    {
      path: '/lastarticle',
      name: 'LastArticle',
      component: LastArticle
    },
    {
      path: '/fichetechnique',
      name: 'TechnicalSheet',
      component: TechnicalSheet
    }
  ]
})
