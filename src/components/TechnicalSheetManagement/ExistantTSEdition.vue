<template>
  <div id="existantTSEdition">
    <div v-if="!this.preview" class="container">
      <h2>Création de fiche technique</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field label="Nom de la fiche technique" required v-model="technicalSheet.name" />
        <v-textarea
          name="pharma"
          box
          label="Pharmacologie"
          auto-grow
          placeholder="Remplir les informations sur la pharmacologie ici."
          v-model="technicalSheet.pharmacologie"
        />
        <v-textarea
          name="chimie"
          box
          label="Chimie"
          auto-grow
          placeholder="Remplir les informations sur la chimie ici."
          v-model="technicalSheet.chimie"
        />

        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">
              <h3>Effets physique</h3>
            </div>
            <v-card>
              <v-card-text>
                <ul class="listNameEffect">
                  <li v-for="item in technicalSheet.effects.physic.counter" :key="item">
                    <h4>Effet n°{{ item }}</h4>
                    <v-text-field
                      placeholder="Nom de l'effet"
                      v-model="technicalSheet.effects.physic.name[item - 1]"
                    />
                    <v-textarea
                      box
                      auto-grow
                      v-model="technicalSheet.effects.physic.describe[item - 1]"
                      placeholder="Remplir la description ici."
                    />
                    <v-btn class="btnDelete" @click="deletePhysicEffect(item)">X</v-btn>
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
                  <li v-for="item in technicalSheet.effects.cognitif.counter" :key="item">
                    <h4>Effet n°{{ item }}</h4>
                    <v-text-field placeholder="Nom de l'effet" :name="setName(effects[1], item)" v-model="technicalSheet.effects.cognitif.name[item - 1]" />
                    <v-textarea
                      box
                      :name="setDescribeName(effects[1], item)"
                      auto-grow
                      v-model="technicalSheet.effects.cognitif.describe[item - 1]"
                      placeholder="Remplir la description ici."
                    />
                    <v-btn class="btnDelete" @click="deleteCognitifEffect(item)">X</v-btn>
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
                  <li v-for="item in technicalSheet.effects.indesirable.counter" :key="item">
                    <h4>Effet n°{{ item }}</h4>
                    <v-text-field placeholder="Nom de l'effet" :name="setName(effects[2], item)" v-model="technicalSheet.effects.indesirable.name[item - 1]" />
                    <v-textarea
                      box
                      :name="setDescribeName(effects[2], item)"
                      auto-grow
                      v-model="technicalSheet.effects.indesirable.describe[item - 1]"
                      placeholder="Remplir la description ici."
                    />
                    <v-btn class="btnDelete" @click="deleteIndesirableEffect(item)">X</v-btn>
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
          v-model="technicalSheet.toxicity"
        />

        <ul class="listUrlReference">
          <li v-for="item in technicalSheet.references.counter" :key="item">
            <v-text-field placeholder="Entrez l'url ici" :name="setUrlName(item)" v-model="technicalSheet.references.urlTab[item - 1]" />
            <v-btn class="btnDelete" @click="deleteUrlReference(item)">X</v-btn>
          </li>
          <v-btn @click="addUrlReference">Ajout d'une référence</v-btn>
        </ul>
        <v-btn @click="validModification">Valider la modification</v-btn>
      </v-form>

    </div>

    <div v-else class="container">
      <TechnicalSheet :technical-sheet="this.technicalSheet" />
      <v-radio-group v-model="technicalSheet.isFinish" :mandatory="false">
        <v-container>
          <v-layout>
            <v-flex md=6>
              <v-radio label="Sauvegarder temporairement la fiche technique" value="false" />
            </v-flex>
            <v-flex md=6>
              <v-radio label="Valider la fiche technique" value="true" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-radio-group>
    </div>
  </div>
</template>
<script>
import TechnicalSheet from '../TechnicalSheet/TechnicalSheet'
import axios from 'axios'
export default {
  name: 'ExistantTSEdition',
  components: {
    TechnicalSheet
  },
  props: {
    'tsobject': {
      type: Object,
      required: true
    }
  },
  data: () => ({
    preview: false,
    valid: false,
    rulesName: [
      v => !!v || 'Le nom de l\'effet physique est requis.',
      v => v.length > 2 || 'L\'effet physique doit faire au moins trois caractères.'
    ],
    effects: ['physicEffect', 'cognitifEffect', 'indesirableEffect'],
    technicalSheet: {
      isFinish: 'false',
      name: '',
      pharmacologie: '',
      chimie: '',
      effects: {
        physic: {
          name: [],
          describe: [],
          counter: 1
        },
        cognitif: {
          name: [],
          describe: [],
          counter: 1
        },
        indesirable: {
          name: [],
          describe: [],
          counter: 1
        }
      },
      toxicity: '',
      references: {
        urlTab: [],
        counter: 1
      }
    }
  }),
  mounted () {
    // set technicalSheet object without counter
    this.technicalSheet = this.tsobject
  },
  methods: {
    addPhysicEffect () {
      this.technicalSheet.effects.physic.counter = this.technicalSheet.effects.physic.counter + 1
    },
    addCognitifEffect () {
      this.technicalSheet.effects.cognitif.counter = this.technicalSheet.effects.cognitif.counter + 1
    },
    addIndesirableEffect () {
      this.technicalSheet.effects.indesirable.counter = this.technicalSheet.effects.indesirable.counter + 1
    },
    addUrlReference () {
      this.technicalSheet.references.counter = this.technicalSheet.references.counter + 1
    },
    deletePhysicEffect (index) {
      this.technicalSheet.effects.physic.counter = this.technicalSheet.effects.physic.counter - 1
      this.technicalSheet.effects.physic.name.splice([index], 1)
      this.technicalSheet.effects.physic.describe.splice([index], 1)
    },
    deleteCognitifEffect (index) {
      this.technicalSheet.effects.cognitif.counter = this.technicalSheet.effects.cognitif.counter - 1
      this.technicalSheet.effects.cognitif.name.splice([index], 1)
      this.technicalSheet.effects.cognitif.describe.splice([index], 1)
    },
    deleteIndesirableEffect (index) {
      this.technicalSheet.effects.indesirable.counter = this.technicalSheet.effects.indesirable.counter - 1
      this.technicalSheet.effects.indesirable.name.splice([index], 1)
      this.technicalSheet.effects.indesirable.describe.splice([index], 1)
    },
    deleteUrlReference (index) {
      this.technicalSheet.references.counter = this.technicalSheet.references.counter - 1
      this.technicalSheet.references.urlTab.splice([index], 1)
    },
    setName (type, str) {
      return type + str
    },
    setDescribeName (type, str) {
      return type + 'Describe' + str
    },
    setUrlName (str) {
      return 'urlName' + str
    },
    validModification () {
      console.log(this.technicalSheet.references.urlTab)
      console.log(this.technicalSheet.effects.physic.name)
      axios.post('http://localhost:3000/api/v1/technicalsheet/update', {
        technicalsheet: this.technicalSheet,
        id: this.tsobject._id,
        token: this.$store.getters.getToken,
        pseudo: this.$store.getters.getPseudo
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
<style scoped>
</style>
