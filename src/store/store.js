import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})

// something with this
// export default {
//     name: 'SearchResultItem',
//     props: ['image', 'title', 'healthLabels', 'servings'],
//     computed: {
//       currImage() {
//         return this.image.startsWith('http') ? this.image : require(`@/assets/${this.image}`)
//       }
//     }
//   }

export const state = () => ({
    name: '',
    props: '',
    computed: {}
});