<template>
  <layout msg="Welcome to Your Vue.js App"/>
</template>

<script>
import layout from './components/backLayout.vue'

export default {
  name: 'app',
  components: {
    layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 body{
   margin: 0;
 }
</style>
