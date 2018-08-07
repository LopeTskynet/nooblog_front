<template>
  <div id="technicalSheetCreation">
    <div class="container">
      <h2>Création de fiche technique</h2>
      <v-form ref="form">
        <v-text-field label="Nom de la fiche technique" required />
        <v-textarea
          name="pharma"
          box
          label="Pharmacologie"
          auto-grow
          placeholder="Remplir les informations sur la pharmacologie ici."
        />
        <v-textarea
          name="chimie"
          box
          label="Chimie"
          auto-grow
          placeholder="Remplir les informations sur la chimie ici."
        />

        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">
              <h3>Effets physique</h3>
            </div>
            <v-card>
              <v-card-text>
                <ul class="listNameEffect">
                  <li v-for="item in inputPhysicEffect" :key="item">
                    <technical-sheet-effect :index="item" :type="effects[0]" />
                  </li>
                  <v-btn @click="addPhysicEffect">Ajout d'un effet physique</v-btn>
                </ul>
              </v-card-text>

            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">
              <h3>Effets cognitif</h3>
            </div>
            <v-card>
              <v-card-text>
                <ul class="listNameEffect">
                  <li v-for="item in inputCognitifEffect" :key="item">
                    <technical-sheet-effect :index="item" :type="effects[1]" />
                  </li>
                  <v-btn @click="addCognitifEffect">Ajout d'un effet cognitif</v-btn>
                </ul>
              </v-card-text>

            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">
              <h3>Effets indésirable</h3>
            </div>
            <v-card>
              <v-card-text>
                <ul class="listNameEffect">
                  <li v-for="item in inputIndesirableEffect" :key="item">
                    <technical-sheet-effect :index="item" :type="effects[2]" />
                  </li>
                  <v-btn @click="addIndesirableEffect">Ajout d'un effet indésirable</v-btn>
                </ul>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-textarea
          name="toxicity"
          box
          label="Toxicité et Interaction potentielle"
          auto-grow
          placeholder="Remplir les informations sur la toxicité et les interactions ici."
        />

        <ul class="listNameEffect">
          <li v-for="item in inputUrlReference" :key="item">
            <v-text-field placeholder="Entrez l'url ici" :name="setUrlName(item)" />
          </li>
          <v-btn @click="addUrlReference">Ajout d'une référence</v-btn>
        </ul>
      </v-form>
      <v-btn @click="testForm">test form</v-btn>
    </div>
  </div>
</template>
<script>
import TechnicalSheetEffect from '@/components/TechnicalSheet/TechnicalSheetEffect'
export default {
  name: 'TechnicalSheetCreation',
  components: {
    TechnicalSheetEffect
  },
  data: () => ({
    inputPhysicEffect: 1,
    inputCognitifEffect: 1,
    inputIndesirableEffect: 1,
    inputUrlReference: 1,
    effects: ['physicEffect', 'cognitifEffect', 'indesirableEffect']
  }),
  methods: {
    addPhysicEffect () {
      this.inputPhysicEffect = this.inputPhysicEffect + 1
    },
    addCognitifEffect () {
      this.inputCognitifEffect = this.inputCognitifEffect + 1
    },
    addIndesirableEffect () {
      this.inputIndesirableEffect = this.inputIndesirableEffect + 1
    },
    addUrlReference () {
      this.inputUrlReference = this.inputUrlReference + 1
    },
    testing (str) {
      return 'effect' + str
    },
    setUrlName (str) {
      return 'urlName' + str
    },
    testForm () {
      console.log('testform')
    }
  }
}
</script>
<style scoped>
#technicalSheetCreation .listNameEffect{
  list-style:none;
}
#technicalSheetCreation .listNameEffect li {
  margin:10px 0 10px 0;
  padding : 5px 10px 5px 10px;
  border:2px solid black;
  border-radius: 8px;
}
</style>
