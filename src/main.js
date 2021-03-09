import Vue from 'vue';
import App from '@/App.vue';
import router from "@/services/router/router";
import store from "@/services/store/store";
import '@/assets/index.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
