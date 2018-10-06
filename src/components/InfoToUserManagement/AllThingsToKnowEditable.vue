<template>
  <div id="allThingsToKnowEditable">
    <div class="container" v-if="!this.modification">
      <h2>
        All things you need to know :
      </h2>
      <div v-for="item in this.tabThings" :key="item._id" class="text-xs-left border">
        <h3>
          {{ item.question }}
        </h3>
        <p>
          {{ item.answer }}
        </p>
        <v-btn @click="switchToModification(item)" class="btnAbsolute">
          <v-icon color="dark">edit</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="container" v-else>
      <all-things-to-know-modification :thing="this.things" />
      <v-btn @click="switchToList()">
        return to the list
      </v-btn>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import AllThingsToKnowModification from './AllThingsToKnowModification'
export default {
  name: 'AllThingsToKnowEditable',
  components: {
    AllThingsToKnowModification
  },
  data: () => ({
    tabThings: [],
    things: Object,
    modification: false
  }),
  mounted () {
    axios.post('http://localhost:3000/api/v1/userthings/thingstoknow/getall', {
    })
      .then(response => {
        console.log('test2')
        response.data.forEach(e => {
          this.tabThings.push(e)
        })
        console.log(response)
        console.log('test3')
      })
    console.log('test')
  },
  methods: {
    switchToModification (thing) {
      this.things = thing
      this.modification = true
    },
    switchToList () {
      this.modification = false
    }
  }
}
</script>
<style scoped>
#app #allThingsToKnowEditable .border{
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
  position:relative;
  min-height:60px;
}
#app #allThingsToKnowEditable .btnAbsolute{
  position:absolute;
  top: 5px;
  right:5px;
  box-shadow:none;
}
</style>
