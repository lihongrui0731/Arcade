import Vuex from 'vuex'
// import Vue from 'vue'

export default new Vuex.Store({
  state: {
    deviceList : [
      {id: 1, name: "Device 1", angle: [30, 32],},
      {id: 2, name: "Device 2", angle: [60, 75],},
      {id: 3, name: "Device 3", angle: [90, 92],},
      {id: 4, name: "Device 4", angle: [120, 125],},
      {id: 5, name: "Device 5", angle: [150, 148],},
      {id: 6, name: "Device 6", angle: [170, 166],},
    ],
    angs: []
  },
  mutations: {
    setAngs(state, angs) {
      state.angs.splice(0);
      angs.forEach(ang => {
        state.angs.push(ang);
      });
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
