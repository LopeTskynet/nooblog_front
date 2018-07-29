<template>
  <div id="technicalSheet">
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
                  {{ item }}
                </li>
              </ul>
            </v-flex>
            <v-flex md4 xs12>
              <h4>Cognitif</h4>
              <ul>
                <li v-for="item in cognitifEffect" :key="item">
                  {{ item }}
                </li>
              </ul>
            </v-flex>
            <v-flex md4 xs12>
              <h4>Indésirable</h4>
              <ul>
                <li v-for="item in sideEffect" :key="item">
                  {{ item }}
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
  </div>
</template>

<script>
export default {
  data: () => ({
    physicEffect: ['concentration  : Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'Relaxation : Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'agumentation du débit sanguin : Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'dilatation des pupilles'],
    cognitifEffect: ['concentration  : Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'Relaxation : Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'agumentation du débit sanguin : Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'dilatation des pupilles'],
    sideEffect: ['concentration  : Lorem ispum dolor sit amet si si lorem ispum dolor sit Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'Relaxation : Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'agumentation du débit sanguin : Lorem ispum dolor sit amet si si lorem ispum dolor sit', 'dilatation des pupilles']

  })
}
</script>

<style>
#app .card{
  border: 1px solid gray;
  border-radius:6px;
  margin-bottom:10px;
}
#app .card__title{
  background:rgb(240,240,240)
}
</style>
