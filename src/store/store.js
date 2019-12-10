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
    getters: {
        results: state => state.recipes,
    },
    mutations: {
        setRecipes(state, recipes) {
            state.recipes = recipes;
        }
    },
    actions: {
        async getRecipes({ commit }, searchText) {
            const recipes = axios.get('search', {
                params:{
                    q: searchText
                }
            }).then (response => state.recipes = response.data.hits);
            commit('results', recipes);
        }
    },
    modules: {
    }
})

// how to pick data from the api
// function getRecipes(searchText) {
//     axios.get('search', {
//         params:{
//             q: searchText
//         }
//     }).then (response => state.recipes = response.data.hits)
// }