import Vuex from 'vuex'
import auth from "./auth"
import cart from "./cart"

new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},

  actions: {},
  modules: {
    auth: auth,
    cart: cart
  }
})
