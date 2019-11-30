import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios

// http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3

axios.defaults.baseURL = 'http://www.recipepuppy.com'
axios.defaults.params = {
  p: 1  
  //app_key: process.env.VUE_APP_API_KEY,
  //app_id: process.env.VUE_APP_API_ID,
  //dishType: 'dessert'
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
