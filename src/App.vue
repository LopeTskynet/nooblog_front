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
                <v-btn color="blue darken-2">
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

        <v-flex md2>
          <div class="navBarLeft">
            <ul class="headline">
              <li><a href="#"><router-link :to="{name:'LastArticle'}"><i class="ti-write" />Dernier articles</router-link></a></li>
              <li><a href="#"><i class="ti-archive" />Articles par catégories</a></li>
              <li><a href="#"><i class="ti-archive" />Articles par effets</a></li>
              <li><a href="#"><i class="ti-book" />Tous les articles</a></li>
              <li><a href="#"><i class="ti-hand-point-right" />Tout ce que vous devez savoir</a></li>
              <li><a href="#"><i class="ti-info-alt" />F.A.Q</a></li>
              <li><a href="#"><i class="ti-user" />Rejoindre l'équipe ?</a></li>
              <li><v-btn @click="testStore">test store and token</v-btn></li>
            </ul>
            <div class="movingArrow " :class="arrow" />
          </div>
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
import axios from 'Axios'
Vue.use(Vuetify, theme)
export default {
  name: 'App',
  components: {
    'FicheTechnique': FicheTechnique
  },
  data: () => ({
    arrow: 'movingArrowMenu'
  }),
  methods: {
    testStore () {
      console.log('test store app pseudo:' + this.$store.getters.getPseudo)
      console.log('test store app isConnected:' + this.$store.getters.getIsConnected)
      console.log('test store app firstname:' + this.$store.getters.getFirstName)
      console.log('test store app lastname:' + this.$store.getters.getLastName)
      console.log('test store app token:' + this.$store.getters.getToken)
      axios.post('http://localhost:3000/api/v1/users/isconnected', {
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
      this.$store.commit('setIsConnected', false)
      sessionStorage.clear()
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
  background: linear-gradient(70deg, #01579B, #00ACC1);
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
#app .containerSearchBar{
  max-width:300px;
  margin-left:auto;margin-right:auto;
}
#app input{
  background:white;
  padding: 5px 10px 5px 10px;
}
#app .navBarLeft{
  text-align:left;
  padding:15px;
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
  background: #212120;
}
#app .navBarLeft ul{
  list-style:none;
  padding-top:15px;
}
#app .navBarLeft ul li{
  margin-bottom: 15px;
  margin-top:15px;
  padding-top:10px;
  padding-bottom:10px;
  font-size:12px;
  text-transform: uppercase;
}
#app .navBarLeft ul li i{
  font-size:24px;
  font-weight:bold;
  margin-right: 15px;
  float:left;
  height:30px;
  width:30px;
  color:rgba(255, 255, 255, 0.7);
}
#app .navBarLeft ul li a{
  line-height:30px;
  color:rgba(255, 255, 255, 0.7);
  text-decoration:none;
}
#app .navBarLeft .movingArrow{
  border-right: 17px solid #f4f3ef;
  border-top : 17px solid transparent;
  border-bottom : 17px solid transparent;
  display:inline-block;
  position:absolute;
  left: 338px;
  top:206px;
  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
}

/* CSS GLOBAL */
#app li {
  list-style:none;
}
#app .container{
  max-width:none;
}
</style>
