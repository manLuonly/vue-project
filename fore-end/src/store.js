import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: localStorage.getItem('userName')
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})

export default store;
