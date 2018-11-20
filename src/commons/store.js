import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const module = {
  state: {
    model: 'home'
  },
  getters: {},
  mutations: {},
  plugins: []
}
const store = new Vuex.Store(module)
export default store