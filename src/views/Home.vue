<template>
  <div class="body">
    <span class="carousel">
      <Carousel />
    </span>
    <Lists />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import Carousel from '@/components/Carousel.vue'
import Lists from '@/components/Lists.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Lists
  }
};
</script>

<style lang="scss">

.body {
  padding: 10px;
  background-color: white; 
}

</style>
