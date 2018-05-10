import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Connexion from '@/components/Connexion/Connexion'
import Inscription from '@/components/Inscription/Inscription'
import Article from '@/components/Article/Article'
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
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
