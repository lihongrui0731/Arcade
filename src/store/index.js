import Vuex from 'vuex'
// import Vue from 'vue'

export default new Vuex.Store({
  state: {
    deviceList : [
      {id: 1, name: "Device 1", angle: 30,},
      {id: 2, name: "Device 2", angle: 60,},
      {id: 3, name: "Device 3", angle: 90,},
      {id: 4, name: "Device 4", angle: 120,},
      {id: 5, name: "Device 5", angle: 150,},
      {id: 6, name: "Device 6", angle: 170,},
    ],
    angs: []
  },
  mutations: {
    setAngs(state, angs) {
      state.angs = angs
    },
    clearAngs(state) {
      state.angs = []
    }
  },
  actions: {
  },
  modules: {
  }
})
