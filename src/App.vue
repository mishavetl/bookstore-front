<template>
  <div id="app">
    <Alerts/>
    <div id="navbar-container">
      <Navbar/>
    </div>
    <div
      id="page"
      class="container"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Alerts from './Alerts';
  import './assets/styles/style.scss';
  import Navbar from './Navbar';

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
