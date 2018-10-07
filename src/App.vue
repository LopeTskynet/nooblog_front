<template>
  <div id="app" data-app light>
    <header>
      <v-container grid-list-md class="noPadding">
        <v-layout row wrap class="backgroundNavbar">
          <v-flex xs12 md6>
            <h1 class="title">Nooblog</h1>
          </v-flex>
          <v-flex xs12 md6>
            <ul>
              <li v-if="this.$store.getters.getIsConnected && this.$store.getters.getRole === 'admin'">
                <v-btn color="blue darken-2" @click="setMenuAdmin">
                  pannel d'administration
                </v-btn>
              </li>

              <li class="title" v-if="!this.$store.getters.getIsConnected">
                <router-link :to="{name:'Connexion'}">
                  <v-btn class="btnHeader">connexion</v-btn>
                </router-link>
              </li>

              <li class="title" v-else>

                <v-menu offset-y>
                  <v-btn slot="activator" class="btnHeader" color="blue darken-2">
                    Welcome {{ this.$store.getters.getPseudo }}
                  </v-btn>
                  <v-list>
                    <v-list-tile @click="mockButton">
                      <v-list-tile-title>
                        <router-link :to="{name:'Parameter'}">
                          <v-icon dark>account_circle</v-icon> Parametre
                        </router-link>
                      </v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="disconnect()">
                      <v-list-tile-title>
                        <v-icon dark>power_settings_new</v-icon> Se déconnecter
                      </v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>

              </li>

              <li class="title" v-if="!this.$store.getters.getIsConnected">
                <router-link :to="{name:'Inscription'}">
                  <v-btn class="btnHeader">
                    inscription
                  </v-btn>
                </router-link>
              </li>
            </ul>
          </v-flex>
        </v-layout>

      </v-container>
    </header>

    <v-container grid-list-md class="noPadding">

      <v-layout row wrap>

        <v-flex v-if="!menuAdmin" md2>
          <Menu />
        </v-flex>

        <v-flex v-else md2>
          <MenuAdmin />
        </v-flex>

        <v-flex md8>
          <router-view/>
        </v-flex>

        <v-flex md2>
          <FicheTechnique/>
        </v-flex>

      </v-layout>

    </v-container>

  </div>
</template>

<script>
import FicheTechnique from '@/components/Article/FicheTechnique'
import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
import axios from 'axios'
import Menu from '@/components/UI/Menu'
import MenuAdmin from '@/components/UI/MenuAdmin'
const backend = require('../config/backend.conf')
Vue.use(Vuetify, theme)
export default {
  name: 'App',
  components: {
    'FicheTechnique': FicheTechnique,
    'Menu': Menu,
    'MenuAdmin': MenuAdmin
  },
  data: () => ({
    arrow: 'movingArrowMenu',
    menuAdmin: false
  }),
  methods: {
    testStore () {
      console.log('test store app pseudo:' + this.$store.getters.getPseudo)
      console.log('test store app isConnected:' + this.$store.getters.getIsConnected)
      console.log('test store app firstname:' + this.$store.getters.getFirstName)
      console.log('test store app lastname:' + this.$store.getters.getLastName)
      console.log('test store app token:' + this.$store.getters.getToken)
      axios.post('http://' + backend.host + ':' + backend.port + '/api/v1/users/isconnected', {
        pseudo: this.$store.getters.getPseudo,
        token: this.$store.getters.getToken
      })
        .then(response => {
          console.log('response check user is connected :' + response.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    mockButton () {
      console.log('button press')
    },
    disconnect () {
      console.log('disco')
      this.$store.commit('setFirstName', '')
      this.$store.commit('setLastName', '')
      this.$store.commit('setPseudo', '')
      this.$store.commit('setEmail', '')
      this.$store.commit('setToken', '')
      this.$store.commit('setRole', '')
      this.$store.commit('setIsConnected', false)
      sessionStorage.clear()
    },
    setMenuAdmin () {
      if (this.menuAdmin === false) {
        this.menuAdmin = true
      } else {
        this.menuAdmin = false
      }
    }
  },
  mounted () {
    if (sessionStorage.first_name && sessionStorage.last_name && sessionStorage.pseudo && sessionStorage.email && sessionStorage.token && sessionStorage.token && sessionStorage.isConnected && sessionStorage.role) {
      this.$store.commit('setFirstName', sessionStorage.first_name)
      this.$store.commit('setLastName', sessionStorage.last_name)
      this.$store.commit('setPseudo', sessionStorage.pseudo)
      this.$store.commit('setEmail', sessionStorage.email)
      this.$store.commit('setToken', sessionStorage.token)
      this.$store.commit('setRole', sessionStorage.role)
      this.$store.commit('setIsConnected', true)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}
#app header{
  background: rgb(60,141,188);
  min-height:60px;
}
#app header a{
  text-decoration: none;
  color: black;
}
#app .noPadding{
  padding:0px;
}
#app header .backgroundNavbar h1{
  line-height:50px !important;
}
#app header ul{
  list-style:none;
  text-align:right;
}
#app header ul li{
  display:inline;
  color:white;
}
#app header ul li a{
  color:white;
  text-decoration:none;
}
#app .v-list{
  background:rgb(25, 118, 210,0.8);
  color:white;
}
#app .v-list a{
  color:white;
  text-decoration:none;
}
#app .containerSearchBar{
  max-width:300px;
  margin-left:auto;margin-right:auto;
}
#app input{
  background:white;
  padding: 5px 10px 5px 10px;
}

/* CSS GLOBAL */
#app li {
  list-style:none;
}
#app .container{
  max-width:none;
}
</style>
