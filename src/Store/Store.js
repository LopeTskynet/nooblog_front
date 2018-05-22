import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isConnected: false,
  first_name: '',
  last_name: '',
  pseudo: '',
  token: ''
}

const getters = {
  getIsConnected: state => state.connected,
  getFirstName: state => state.first_name,
  getLastName: state => state.last_name,
  getPseudo: state => state.pseudo,
  getToken: state => state.token
}

const mutations = {
  setIsConnected: (state, connected) => {
    state.connected = connected
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})

export default store
