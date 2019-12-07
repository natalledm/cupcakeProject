import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://api.edamam.com/'
axios.defaults.params = {
  app_id: process.env.VUE_APP_API_ID,
  app_key: process.env.VUE_APP_API_KEY
  //dishType: 'dessert'
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
