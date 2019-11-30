import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'https://api.edamam.com'
axios.defaults.params = {
  app_key: process.env.VUE_APP_API_KEY,
  app_id: process.env.VUE_APP_API_ID,
  dishType: 'dessert'
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
