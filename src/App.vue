<template>
  <div id="app" data-app light>
    <header>
      <div class="hidden-md-and-up mobileMenu">
        <v-icon>menu</v-icon>
      </div>
      <div class="hidden-sm-and-down desktopMenu" :class="changeDesktopMenu">
        <img src="../static/img/UI/medicine_title.png" alt="icon drugs">
        <h1 class="title" v-if="this.changeDesktopMenu == ''">Nooblog</h1>
        <p v-if="this.changeDesktopMenu == ''">
          Interface du menu
        </p>
        <v-icon v-if="this.changeDesktopMenu == ''" @click="reduceMenuDesktop()">chevron_left</v-icon>
        <v-icon v-if="this.changeDesktopMenu == 'desktopMenuSmall'" @click="openMenuDesktop()">chevron_right</v-icon>
      </div>

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
    </header>

    <div>
      <div id="leftContent" :class="leftBarDown">
        <div v-if="!menuAdmin" class="hidden-xs-and-down">
          <Menu />
        </div>
        <div v-else class="hidden-xs-and-down backgroundMain">
          <MenuAdmin />
        </div>
      </div>
      <div id="rightcontent" :class="mainContentFull">
        <router-view style="width:100%"/>
      </div>
    </div>

  </div>
</template>

<script>
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
    'Menu': Menu,
    'MenuAdmin': MenuAdmin
  },
  data: () => ({
    arrow: 'movingArrowMenu',
    menuAdmin: false,
    changeDesktopMenu: '',
    leftBarDown: '',
    mainContentFull: ''
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
    },
    reduceMenuDesktop () {
      this.changeDesktopMenu = 'desktopMenuSmall'
      this.mainContentFull = 'rightBarFullContent'
      this.leftBarDown = 'leftBarDown'
    },
    openMenuDesktop () {
      this.changeDesktopMenu = ''
      this.mainContentFull = ''
      this.leftBarDown = ''
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
  /* color: #2c3e50; */
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}
#app header{
  background: linear-gradient(154deg,#008fe2 0,#00b29c 100%);
  height:78px;
}
#app header .mobileMenu{
  float:left;
  position:relative;
  height:78px;
}
#app header .mobileMenu i{
  position:absolute;
  left: 10px;
  top:12%;
  font-size:60px;
  color:rgba(255,255,255,0.7);
}
#app header .desktopMenu{
  float:left;
  height:78px;
  width:260px;
  padding-top: 12px;
  padding-left:10px;
  text-align:left;
  color:white;
  background-color:rgba(255, 255, 255, 0.1);
  position:relative;
  transition: width 1s;
}
#app header .desktopMenu h1{
  position:absolute;
  left:80px;
  top: 20px;
  font-weight:bold;
  font-size:16px !important;
}
#app header .desktopMenu p{
  position:absolute;
  left: 80px;
  top:40px;
  font-size:12px;
  color:rgba(255,255,255,.5);
}
#app header .desktopMenu i{
  position:absolute;
  top:36%;
  right:10px;
  color:rgba(255,255,255,.5);
}
#app header .desktopMenu i:hover{
  background-color:rgba(255,255,255,.1);
  color:rgba(255,255,255,.85);
  cursor:pointer;
}
#app header .desktopMenuSmall{
  width:120px;
}
#app header a{
  text-decoration: none;
  color: black;
}
#app .mainContent{
  padding:0px;
  clear:both;
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
/* MAINCONTENT START */
#app #leftContent{
  display:inline-block;
  width:260px;
  transition: 1s;
}
#app .leftBarDown{
  display:none !important;
}
#app #rightcontent{
  display:inline-block;
  vertical-align:top;
  width: calc(100% - 264px);
}
#app .rightBarFullContent{
  width: 100% !important;
}
/* MAINCONTENT END */
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
#app .backgroundMain{
  background:rgb(250, 252, 254);
}
/* CSS GLOBAL */
#app li {
  list-style:none;
}
#app .container{
  max-width:none;
}
</style>
