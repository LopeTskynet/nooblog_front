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
  getIsConnected: state => state.isConnected,
  getFirstName: state => state.first_name,
  getLastName: state => state.last_name,
  getPseudo: state => state.pseudo,
  getToken: state => state.token
}
const actions = {
  setPseudo: ({ commit, state }, pseudo) => {
    return new Promise((resolve, reject) => {
      // les pseudos doivent faire au moins 4 caracts
      if (pseudo && pseudo.length > 4) {
        resolve()
        commit('setPseudo', pseudo)
      } else {
        reject(new Error('Les pseudos doivent faire au moins 4 caractères: "' + pseudo + '"'))
      }
    })
  },

  setIsConnected: ({ commit, state }, isConnected) => {
    return new Promise((resolve, reject) => {
      // isConnected doit être égal à true ou false
      if (isConnected === true) {
        resolve()
        commit('setIsConnected', isConnected)
      } else if (isConnected === false) {
        resolve()
        commit('setIsConnected', isConnected)
      } else {
        reject(new Error('le statu isConnected est : "' + isConnected + '"'))
      }
    })
  },

  setFirstName: ({ commit, state }, firstName) => {
    return new Promise((resolve, reject) => {
      // le prénom doit faire au moins deux caractères
      if (firstName && firstName.length >= 2) {
        resolve()
        commit('setFirstName', firstName)
      } else {
        reject(new Error('Les prénoms doivent faire au moins deux caractères: "' + firstName + '"'))
      }
    })
  },

  setLastName: ({ commit, state }, lastName) => {
    return new Promise((resolve, reject) => {
      // le nom doit faire au moins deux caractères
      if (lastName && lastName.length >= 2) {
        resolve()
        commit('setLastName', lastName)
      } else {
        reject(new Error('les noms doivent faire au moins deux caractères: "' + lastName + '"'))
      }
    })
  },

  setToken: ({ commit, state }, token) => {
    return new Promise((resolve, reject) => {
      // Il faudra rajouter des contrôles ici
      if (token) {
        resolve()
        commit('setToken', token)
      } else {
        reject(new Error('le token doit exister: "' + token + '"'))
      }
    })
  }
}

const mutations = {
  setIsConnected: (state, isConnected) => {
    state.isConnected = isConnected
  },
  setPseudo: (state, pseudo) => {
    state.pseudo = pseudo
  },
  setFirstName: (state, firstName) => {
    state.first_name = firstName
  },
  setLastName: (state, lastName) => {
    state.last_name = lastName
  },
  setToken: (state, token) => {
    state.token = token
  }
}

let store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
