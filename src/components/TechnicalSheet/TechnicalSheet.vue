<template>
  <div id="technicalSheet">

    <div class="container">
      <h2>Fiche technique<br>{{ technicalSheet.name }}</h2>
      <v-card>
        <v-card-title>
          <h3>Pharmacologie :</h3>
        </v-card-title>
        <v-card-text class="text-sm-left">
          {{ technicalSheet.pharmacologie }}
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h3>Chimie :</h3>
        </v-card-title>
        <v-card-text class="text-sm-left">
          {{ technicalSheet.chimie }}
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
                  <li v-for="item in technicalSheet.effects.physic.counter" :key="item">
                    <span class="itemNameList">{{ technicalSheet.effects.physic.name[item - 1] }}<span v-if="!technicalSheet.effects.physic.describe[item - 1] == ''">:</span></span> {{ technicalSheet.effects.physic.describe[item - 1] }}
                  </li>
                </ul>
              </v-flex>
              <v-flex md4 xs12>
                <h4>Cognitif</h4>
                <ul>
                  <li v-for="item in technicalSheet.effects.cognitif.counter" :key="item">
                    <span class="itemNameList">{{ technicalSheet.effects.cognitif.name[item - 1] }}<span v-if="!technicalSheet.effects.cognitif.describe[item - 1] == ''">:</span></span> {{ technicalSheet.effects.cognitif.describe[item - 1] }}
                  </li>
                </ul>
              </v-flex>
              <v-flex md4 xs12>
                <h4>Indésirable</h4>
                <ul>
                  <li v-for="item in technicalSheet.effects.indesirable.counter" :key="item">
                    <span class="itemNameList">{{ technicalSheet.effects.indesirable.name[item - 1] }}<span v-if="!technicalSheet.effects.indesirable.describe[item - 1] == ''">:</span></span> {{ technicalSheet.effects.indesirable.describe[item - 1] }}
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
          {{ technicalSheet.toxicity }}
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>
          <h3>Notes et références</h3>
        </v-card-title>
        <v-card-text>
          <ul class="referenceList">
            <li v-for="item in technicalSheet.references.urlTab" :key="item">
              <a :href="item">{{ item }}</a>
            </li>
          </ul>
        </v-card-text>
      </v-card>
      <v-btn @click="backToListTechnicalSheet">Retour à la liste des fiches techniques</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalSheet',
  props: {
    technicalSheet: {
      type: Object,
      required: true
    }
  },
  data: () => ({
  }),
  methods: {
    backToListTechnicalSheet () {
      this.$parent._data.showTechnicalsheet = 'false'
      this.$parent._data.technicalsheet = null
    }
  }
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
