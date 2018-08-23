<template>
  <div id="menuAdmin">
    <div class="navBarLeft">
      <h2 class="text-xs-center">
        <img src="../../../static/img/UI/medicine.png" alt="icon drugs">
        Nooblog Admin
      </h2>
      <ul class="headline">
        <li>
          <v-expansion-panel expand>
            <v-expansion-panel-content>
              <div slot="header">Article</div>
              <v-card>
                <v-card-text class="paddingLeft">
                  <router-link :to="{name:'ArticleCreation'}">Création</router-link>
                </v-card-text>
                <v-card-text class="paddingLeft">
                  <router-link :to="{name:'InProgressArticle'}">Article en cours</router-link>
                </v-card-text>
                <v-card-text class="paddingLeft">
                  Editer un article
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </li>
        <li>
          <v-expansion-panel expand>
            <v-expansion-panel-content>
              <div slot="header">Fiche technique</div>
              <v-card>
                <v-card-text class="paddingLeft">
                  <router-link :to="{name:'TechnicalSheetCreation'}">Création</router-link>
                </v-card-text>
                <v-card-text class="paddingLeft">
                  Fiche technique en cours
                </v-card-text>
                <v-card-text class="paddingLeft">
                  Editer une fiche technique
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuAdmin',
  data: () => ({

  })
}
</script>
<style scoped>
#app .navBarLeft{
  text-align:left;
  padding:15px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
  background: rgb(34,45,51);
  color:white;
}
#app .navBarLeft ul{
  list-style:none;
  padding-top:15px;
}
#app .navBarLeft ul li{
  font-size:12px;
  text-transform: uppercase;
}
#app .navBarLeft ul li .paddingLeft{
  padding-left:40px;
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
</style>
