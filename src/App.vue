<template>
  <div id="app">
    <Navigator/>
    <router-view/>
  </div>
</template>
<script>
import Navigator from '@/components/Nav';
export default {
  name: 'App',
  components: { Navigator }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 61px;
}

</style>
