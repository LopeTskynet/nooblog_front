<template>
  <div id="technicalSheet">

    <div class="container">
      <h2>Fiche technique<br>Lorem Ipsum</h2>
      <v-card>
        <v-card-title>
          <h3>Pharmacologie :</h3>
        </v-card-title>
        <v-card-text class="text-sm-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex eros, euismod vel magna ac, eleifend tincidunt est. Aenean viverra tortor lorem, ut rutrum mi dapibus ut. Duis scelerisque cursus justo ut convallis. Praesent eleifend, felis id ultrices scelerisque, lacus magna pretium eros, nec aliquam velit nisi nec lorem. Fusce pulvinar nisl vestibulum nunc sagittis viverra. Suspendisse convallis ligula nisl, et bibendum ligula faucibus non. Sed nec vulputate diam. Nulla facilisi. Vivamus ut ex ullamcorper, pretium elit vitae, egestas nibh. Fusce arcu mauris, iaculis quis lorem sit amet, egestas sagittis felis. Nam iaculis convallis sollicitudin.
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h3>Chimie :</h3>
        </v-card-title>
        <v-card-text class="text-sm-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex eros, euismod vel magna ac, eleifend tincidunt est. Aenean viverra tortor lorem, ut rutrum mi dapibus ut. Duis scelerisque cursus justo ut convallis. Praesent eleifend, felis id ultrices scelerisque, lacus magna pretium eros, nec aliquam velit nisi nec lorem. Fusce pulvinar nisl vestibulum nunc sagittis viverra. Suspendisse convallis ligula nisl, et bibendum ligula faucibus non. Sed nec vulputate diam. Nulla facilisi. Vivamus ut ex ullamcorper, pretium elit vitae, egestas nibh. Fusce arcu mauris, iaculis quis lorem sit amet, egestas sagittis felis. Nam iaculis convallis sollicitudin.
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h3>Effets :</h3>
        </v-card-title>
        <v-card-text class="text-sm-left">
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex md4 xs12>
                <h4>Physique</h4>
                <ul>
                  <li v-for="item in physicEffect" :key="item">
                    <span class="itemNameList">{{ item[0] }}<span v-if="!item[1] == ''">:</span></span> {{ item[1] }}
                  </li>
                </ul>
              </v-flex>
              <v-flex md4 xs12>
                <h4>Cognitif</h4>
                <ul>
                  <li v-for="item in cognitifEffect" :key="item">
                    <span class="itemNameList">{{ item[0] }}<span v-if="!item[1] == ''">:</span></span> {{ item[1] }}
                  </li>
                </ul>
              </v-flex>
              <v-flex md4 xs12>
                <h4>Indésirable</h4>
                <ul>
                  <li v-for="item in sideEffect" :key="item">
                    <span class="itemNameList">{{ item[0] }}<span v-if="!item[1] == ''">:</span></span> {{ item[1] }}
                  </li>
                </ul>
              </v-flex>
            </v-layout>
          </v-container>

        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h3>Toxicité et interaction potentielle :</h3>
        </v-card-title>
        <v-card-text class="text-sm-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex eros, euismod vel magna ac, eleifend tincidunt est. Aenean viverra tortor lorem, ut rutrum mi dapibus ut. Duis scelerisque cursus justo ut convallis. Praesent eleifend, felis id ultrices scelerisque, lacus magna pretium eros, nec aliquam velit nisi nec lorem. Fusce pulvinar nisl vestibulum nunc sagittis viverra. Suspendisse convallis ligula nisl, et bibendum ligula faucibus non. Sed nec vulputate diam. Nulla facilisi. Vivamus ut ex ullamcorper, pretium elit vitae, egestas nibh. Fusce arcu mauris, iaculis quis lorem sit amet, egestas sagittis felis. Nam iaculis convallis sollicitudin.
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h3>Notes et références</h3>
        </v-card-title>
        <v-card-text>
          <ul class="referenceList">
            <li v-for="item in reference" :key="item">
              <a :href="item">{{ item }}</a>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalSheet',
  data: () => ({
    physicEffect: {
      'title1': ['concentration', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit '],
      'title2': ['relaxation', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit '],
      'title3': ['augmentation du débit sanguin', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit'],
      'title4': ['dilation des pupilles', '']
    },
    cognitifEffect: {
      'title1': ['concentration', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit '],
      'title2': ['relaxation', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit '],
      'title3': ['augmentation du débit sanguin', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit'],
      'title4': ['dilation des pupilles', '']
    },
    sideEffect: {
      'title1': ['concentration', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit '],
      'title2': ['relaxation', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit '],
      'title3': ['augmentation du débit sanguin', 'Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit'],
      'title4': ['dilation des pupilles', '']
    },
    reference: ['www.google.fr', 'www.quora.com', 'www.wikipedia.org']
  })
}
</script>

<style>
#technicalSheet .container{
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
  background:#F4F3EF;
}
#technicalSheet .container h2{
  background:rgb(230,230,230);
  margin-bottom:10px;
  padding:10px;
  border-radius:6px;
  border: 1px solid gray;
}
#technicalSheet .card{
  border: 1px solid gray;
  border-radius:6px;
  margin-bottom:10px;
}
#technicalSheet .card__title{
  background:rgb(230,230,230)
}
#technicalSheet .card__text .itemNameList{
  color:#158cba;
  font-weight:bold;
}
#technicalSheet .card__text .referenceList{
  list-style:none;
  text-align:left;
}
</style>
