// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import App from './App'
import VueCookies from 'vue-cookies'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuex from 'vuex'
import store from './Store/Store'
import wysiwyg from 'vue-wysiwyg'
import 'vue-wysiwyg/dist/vueWysiwyg.css'
Vue.use(Vuetify, {
  theme: {
    primary: '#5e35b1', // $deep-purple.darken-1
    accent: '#7c4dff', // $deep-purple.accent-2
    secondary: '#f4511e', // $deep-orange.darken-1
    info: '#1976d2', // $blue.darken-2
    warning: '#ffa000', // $amber.darken-2
    error: '#d32f2f', // $red.darken-2
    success: '#388e3c' // $green.darken-2
  }
})
Vue.use(VueCookies)
Vue.use(Vuex)
Vue.use(wysiwyg, {})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
