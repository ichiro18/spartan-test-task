import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "@/services/router/routes";
import {BASE_URL} from "@/common/const/config";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: BASE_URL,
  linkExactActiveClass: 'is-active',
  linkActiveClass: 'is-active',
  routes,
});

export default router
