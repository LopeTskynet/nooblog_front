<template>
  <!-- eslint-disable -->
  <div id="app" data-app light>
    <header>
      <v-container grid-list-md class="noPaddingTop">
        <v-layout row wrap class="backgroundNavbar">
          <v-flex xs12>
            <ul>
              <li class="title" v-if="!this.$store.getters.getIsConnected"><router-link :to="{name:'Connexion'}">connexion</router-link></li>
              <li class="title" v-else>
                <router-link :to="{name:'Connexion'}" class="text-xs-center">
                  <v-menu offset-y>
                    <v-btn slot="activator" color="primary" dark>
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
              <li class="title"><router-link :to="{name:'Inscription'}">inscription</router-link></li>
              <li class="title">mon compte</li>
            </ul>
          </v-flex>
        </v-layout>
        <v-layout row wrap>

          <v-flex xs6>
            <h1 class="display-3">Nooblog</h1>
            <span class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mattis turpis.</span>
          </v-flex>

          <v-flex xs6>

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
              <li>Dernier articles</li>
              <li>Articles par catégories</li>
              <li>Articles par effets</li>
              <li>Tous les articles</li>
              <li>Tout ce que vous devez savoir</li>
              <li>F.A.Q</li>
              <li>Rejoindre l'équipe ?</li>
              <li><v-btn @click="testStore">test</v-btn></li>
            </ul>
          </div>
        </v-flex>

        <v-flex md8>
          <router-view/>
        </v-flex>

        <v-flex md2>
          test
        </v-flex>

      </v-layout>

    </v-container>

  </div>
  <!-- eslint-enable -->
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
Vue.use(Vuetify, theme)
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
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
  background:gray;
}
#app header .noPaddingTop{
  padding-top:0px;
}
#app header .backgroundNavbar{
  background: rgb(15,60,99);
  padding: 20px;
}
#app header ul{
  list-style:none;
  text-align:right;
}
#app header ul li{
  display:inline;
  margin-right:10px;
  color:white;
  border: 2px solid white;
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
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
}
#app .navBarLeft ul{
  list-style:none;
  padding-top:15px;
}
#app .navBarLeft ul li{
  margin-bottom: 15px;
}

/* Style for menu account */
#app .list{
  background-color:#5e35b1;
  color:white;
}

</style>
