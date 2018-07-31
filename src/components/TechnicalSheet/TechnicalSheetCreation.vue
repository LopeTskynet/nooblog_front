<template>
  <div id="technicalSheetCreation">
    <div class="container">
      <h2>Création de fiche technique</h2>
      <form>
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
                    <h4>Effet n°{{ item }}</h4>
                    <v-text-field placeholder="Nom de l'effet" :name=setPhysicName(item) />
                    <v-textarea
                      class="textAreaEffect"
                      :name=setPhysicDescribeName(item)
                      box
                      :label=testing(item)
                      auto-grow
                      placeholder="Remplir la description ici."
                    />
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
                    <h4>Effet n°{{ item }}</h4>
                    <v-text-field placeholder="Nom de l'effet" :name=setCognitifName(item) />
                    <v-textarea
                      class="textAreaEffect"
                      :name=setCognitifDescribeName(item)
                      box
                      :label=testing(item)
                      auto-grow
                      placeholder="Remplir la description ici."
                    />
                  </li>
                </ul>
              </v-card-text>

            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>


      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechnicalSheetCreation',
  data: () => ({
    inputPhysicEffect: 1,
    inputCognitifEffect: 1
  }),
  methods: {
    addPhysicEffect () {
      this.inputPhysicEffect = this.inputPhysicEffect + 1
    },
    testing (str) {
      return 'effect' + str
    },
    setPhysicName (str) {
      return 'physicEffect' + str
    },
    setPhysicDescribeName (str) {
      return 'physicEffectDescribe' + str
    },
    setCognitifName (str) {
      return 'cognitifEffect' + str
    },
    setCognitifDescribeName (str) {
      return 'cognitifEffectDescribe' + str
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
