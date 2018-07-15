<template>
  <!-- eslint-disable -->
  <div id="app" data-app light>
    <header>
      <v-container grid-list-md>

        <v-layout row wrap>

          <v-flex xs6>
            <h1 class="display-3">Nooblog</h1>
            <span class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mattis turpis.</span>
          </v-flex>

          <v-flex xs6>
            <ul>
              <li class="title" v-if="!this.$store.getters.getIsConnected">
                <router-link :to="{name:'Connexion'}">
                  <v-btn class="btnHeader">connexion</v-btn>
                </router-link>
              </li>

              <li class="title" v-else>

                <router-link :to="{name:'Connexion'}" class="text-xs-center">
                  <v-menu offset-y>
                    <v-btn slot="activator" class="btnHeader">
                      Welcome {{this.$store.getters.getPseudo}}
                    </v-btn>
                    <v-list>
                      <v-list-tile v-for="(item, index) in items" :key="index" @click="">
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </router-link>

              </li>

              <li class="title"><router-link :to="{name:'Inscription'}"><v-btn class="btnHeader">inscription</v-btn></router-link></li>

              <li class="title">mon compte</li>
            </ul>
            <div class="containerSearchBar">
              <v-text-field id="searchInput" name="search-bar" label="Rechercher..."></v-text-field>
            </div>
          </v-flex>

        </v-layout>

      </v-container>
    </header>

    <v-container grid-list-md>

      <v-layout row wrap>

        <v-flex md2>
          <div class="navBarLeft">
            <ul class="headline">
              <li><a href="#"><router-link :to="{name:'LastArticle'}"><i class="ti-write"></i>Dernier articles</router-link></a></li>
              <li><a href="#"><i class="ti-archive"></i>Articles par catégories</a></li>
              <li><a href="#"><i class="ti-archive"></i>Articles par effets</a></li>
              <li><a href="#"><i class="ti-book"></i>Tous les articles</a></li>
              <li><a href="#"><i class="ti-hand-point-right"></i>Tout ce que vous devez savoir</a></li>
              <li><a href="#"><i class="ti-info-alt"></i>F.A.Q</a></li>
              <li><a href="#"><i class="ti-user"></i>Rejoindre l'équipe ?</a></li>
              <li><v-btn @click="testStore">test</v-btn></li>
            </ul>
            <div class="movingArrow " :class="arrow"></div>
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
  <!-- eslint-enable -->
</template>

<script>
import FicheTechnique from '@/components/Article/FicheTechnique'
import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
Vue.use(Vuetify, theme)
export default {
  name: 'App',
  components: {
    'FicheTechnique': FicheTechnique
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ],
    arrow: 'movingArrowMenu'
  }),
  methods: {
    testStore () {
      console.log('test store app pseudo:' + this.$store.getters.getPseudo)
      console.log('test store app isConnected:' + this.$store.getters.getIsConnected)
      console.log('test store app firstname:' + this.$store.getters.getFirstName)
      console.log('test store app lastname:' + this.$store.getters.getLastName)
      console.log('test store app token:' + this.$store.getters.getToken)
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
  border-bottom: 6px solid rgba(100,100,100,0.5);
}
#app header a{
  text-decoration: none;
  color: black;
}
#app header a .btnHeader{
  background:rgba(255,255,255,0.9);
}
#app header ul{
  list-style:none;
  text-align:right;
}
#app header ul li{
  display:inline;
  margin-right:10px;
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

/* Style for menu account */
#app .list{
  background-color:#5e35b1;
  color:white;
}

</style>
