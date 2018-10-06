<template>
  <div id="technicalSheetCard">
    <div class="containerTc text-xs-left" @click="loadTechnicalsheet()" >
      <h3>{{ technicalsheet.name }}</h3>
      <p class="subtitle">
        Fiche postée le {{ this.date.day }} {{ this.date.month }} {{ this.date.year }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechnicalSheetCard',
  props: {
    technicalsheet: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    date: {
      day: '',
      month: '',
      year: ''
    }
  }),
  mounted () {
    this.date.day = this.technicalsheet.date.slice(8, 10)
    this.date.year = this.technicalsheet.date.slice(0, 4)
    switch (this.technicalsheet.date.slice(5, 7)) {
      case '01':
        this.date.month = 'Janvier'
        break
      case '02':
        this.date.month = 'Février'
        break
      case '03':
        this.date.month = 'Mars'
        break
      case '04':
        this.date.month = 'Avril'
        break
      case '05':
        this.date.month = 'Mai'
        break
      case '06':
        this.date.month = 'Juin'
        break
      case '07':
        this.date.month = 'Juillet'
        break
      case '08':
        this.date.month = 'Août'
        break
      case '09':
        this.date.month = 'Septembre'
        break
      case '10':
        this.date.month = 'Octobre'
        break
      case '11':
        this.date.month = 'Novembre'
        break
      case '12':
        this.date.month = 'Décembre'
        break
      default:
        this.date.month = 'undefined'
    }
  },
  methods: {
    loadTechnicalsheet () {
      console.log('loading the technicalsheet')
      this.$parent._data.showTechnicalsheet = 'true'
      this.$parent._data.technicalsheet = this.technicalsheet
    }
  }
}
</script>
<style scoped>
#app #technicalSheetCard{
  border-radius:6px;
  box-shadow:0 2px 2px hsla(38,16%,76%,.5);
}
#app #technicalSheetCard:hover{
  cursor: pointer;
}
#app #technicalSheetCard .subtitle {
  color: grey;
  font-style: italic;
}
#app #technicalSheetCard .containerTc {
  padding: 10px;
  transition: 0.3s;
}
#app #technicalSheetCard .containerTc:hover {
  background: rgba(0,0,0,0.8);
  color:white;
}
</style>
