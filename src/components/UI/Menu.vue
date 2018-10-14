<template>
  <div id="menu">
    <div class="navBarLeft">
      <div class="backgroundBlack">
        <h2 class="text-xs-center">
          <img src="../../../static/img/UI/medicine.png" alt="icon drugs">
          Nooblog
        </h2>
        <ul class="headline">
          <li><router-link :to="{name:'LastArticle'}"><i class="ti-write" />Dernier articles</router-link></li>
          <li><i class="ti-bookmark-alt" /><router-link :to="{name:'LastTechnicalSheet'}">Dernières fiches techniques</router-link></li>
          <!-- <li><a href="#"><i class="ti-archive" />Articles par effets</a></li> -->
          <li><i class="ti-book" />Tous les articles</li>
          <li><i class="ti-hand-point-right" /><router-link :to="{name:'AllThingsToKnow'}">Tout ce que vous devez savoir</router-link></li>
          <li><i class="ti-info-alt" /><router-link :to="{name:'Faq'}">F.A.Q</router-link></li>
          <li><i class="ti-user" />Rejoindre l'équipe ?</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data: () => ({

  })
}
</script>
<style scoped>
#app .navBarLeft{
  text-align:left;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
  height:100%;
  /*background: url("../../../static/img/UI/sidebar.jpg");*/
}
#app .navBarLeft .backgroundBlack{
  padding:15px;
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
  color:rgb(28, 130, 255);
  /* text-transform: uppercase; */
}
#app .navBarLeft ul li i{
  font-size:18px;
  margin-right: 15px;
  float:left;
  line-height:30px;
}
#app .navBarLeft ul li a{
  text-decoration:none;
  color:rgb(28, 130, 255);
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
