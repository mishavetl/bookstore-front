<template>
  <div id="app">
    <Alerts/>
    <div id="navbar-container">
      <Navbar />
    </div>
    <!--<img src="./assets/logo.png">-->
    <div id="page" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Alerts from './Alerts'

export default {
  name: 'App',
  components: {
    Navbar,
    Alerts
  }
}
</script>

<style>
  #navbar-container {
    margin-bottom: 50px;
  }
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
  /*}*/
</style>
