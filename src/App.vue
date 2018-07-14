<template>
  <div id="app">
    <alerts/>
    <div id="navbar-container">
      <navbar/>
    </div>
    <b-container id="page">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
  import './assets/styles/style.scss';
  import Alerts from './components/Alerts';
  import Navbar from './components/Navbar';

  export default {
    name: 'App',
    components: {
      Navbar,
      Alerts,
    },
  };
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
