<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>

import Vue from 'vue'
import TheHeader from './components/TheHeader'
import TheFooter from './components/Footer'


export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">

body {
  background: #f6c5d4 url("assets/background.jpg") 0 0 repeat;
}

#app {
  width: 90%;
  margin: 10px auto;
  background: #ffff;
  box-shadow: #666666 0px 0px 7px;
  overflow: hidden;
  border-radius: 10px;
  padding: 0;
}

@media (min-width: 768px) and (max-width: 1023px) {
  //tablet
  #app {
    width: 80%;
    margin: 15px auto;
    padding: 0;
  }
}

@media (min-width: 1024px) {
  //desktop and tv
  #app {
    width: 1000px;
    margin: 20px auto;
    padding: 0;
  }
}

</style>
