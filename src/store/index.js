import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://api.edamam.com/'
axios.defaults.params = {
  app_id: process.env.VUE_APP_API_ID,
  app_key: process.env.VUE_APP_API_KEY
}

export default new Vuex.Store({
    state: {
        recipes: []
    },
    mutations: {
        setRecipes(state, newRecipes) {
            state.recipes = newRecipes;
        }
    },
    actions: {
        async getRecipes(context, searchText) {
            axios.get('search', {
                params:{
                    q: searchText
                }
            }).then (response => context.commit('setRecipes', response.data.hits));
        }
    }
})