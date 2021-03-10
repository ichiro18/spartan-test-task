import Vue from 'vue';
import Vuex from 'vuex';
import config from "@/common/const/config";
// modules
import tropaions from "@/services/store/modules/tropaions"

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: config.DEBUG,
  state: {
    ...config
  },
  mutations: {},
  actions: {},
  modules: {
    tropaions
  },
})

export default store;
