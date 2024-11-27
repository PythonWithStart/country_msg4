import Vue from 'vue'
import Vuex from 'vuex'
import { getTours } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: []
  },
  mutations: {
    setTours (state, tours) {
      state.tours = tours
    }
  },
  actions: {
    fetchTours ({ commit }) {
      getTours().then(response => {
        commit('setTours', response.data.tours)
      }).catch(error => {
        console.error('Error fetching tours:', error)
      })
    }
  }
})
