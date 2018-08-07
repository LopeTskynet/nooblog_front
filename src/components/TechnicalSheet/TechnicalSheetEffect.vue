<template>
  <div id="technicalSheetEffect">
    <h4>Effet n°{{ index }}</h4>
    <v-text-field placeholder="Nom de l'effet" :name="setName(type, index)" />
    <v-textarea
      box
      :name="setDescribeName(type, index)"
      auto-grow
      placeholder="Remplir la description ici."
    />
  </div>
</template>
<script>
export default {
  name: 'TechnicalSheetEffect',
  props: {
    index: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    setName (type, str) {
      return type + str
    },
    setDescribeName (type, str) {
      return type + 'Describe' + str
    }
  }
}
</script>
<style scoped>
</style>
