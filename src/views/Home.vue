<template>
  <div class="body">
    <span class="carousel">
      <Carousel />
    </span>
    <span class="lists">
      Small texts (component)
    </span>
    <span class="test-button">
      Test button and text.
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home'
  // components: {
  //   HelloWorld
  // }
};
</script>
