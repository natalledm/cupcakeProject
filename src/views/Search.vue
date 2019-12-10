<template>
  <main class="search">
    <search-field 
    v-on:search="getSearchResults"
    />

    <section class="search-results">
      <search-result-item 
      v-for="result in results" 
      :key="result.recipe.uri" 
      :image="result.recipe.image" 
      :title="result.recipe.label" 
      :health-labels="result.recipe.healthLabels" 
      :servings="result.recipe.yield" />
    </section>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField'
import SearchResultItem from '@/components/SearchResultItem'
import { mapGetters, mapActions } from 'vuex';
  
export default {
  name: 'Search',
  components: {
    SearchField,
    SearchResultItem
  },
  computed: {
    ...mapActions([
      'getRecipes',
      ]),
    methods: {
      ...mapActions(['getRecipes']),
    },
      getQuery() {
          const input = this.$el.querySelector('input[name="search-input"]').value;
          this.getRecipes(input);
      }
  }
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