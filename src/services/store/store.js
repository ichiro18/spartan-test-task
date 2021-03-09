import Vue from 'vue';
import Vuex from 'vuex';
import {DEBUG} from "@/common/const/config";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: DEBUG,
  state: {},
  mutations: {},
  actions: {},
  modules: {},
})

export default store;
