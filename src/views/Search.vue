<template>
  <main class="search">
    <search-field 
    v-on:search="getSearchResults"
    />

    <section class="search-results">
      <search-result-item 
      v-for="recipe in recipes" 
      :key="recipe.recipe.uri" 
      :image="recipe.recipe.image" 
      :title="recipe.recipe.label" 
      :health-labels="recipe.recipe.healthLabels" 
      :servings="recipe.recipe.yield" />
    </section>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField'
import SearchResultItem from '@/components/SearchResultItem'
import { mapActions } from 'vuex';
  
export default {
  name: 'Search',
  components: {
    SearchField,
    SearchResultItem
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    ...mapActions(['getRecipes']),
    
    getSearchResults(query) {
      this.getRecipes(query);
    }
  },
}
</script>

<style lang="scss" scoped>
  .search {
    padding: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto auto;
  }
</style>