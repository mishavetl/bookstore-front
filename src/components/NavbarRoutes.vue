<template>
  <b-navbar-nav>
    <b-nav-item :to="route({name: 'Index'})">{{ $t('home') }}</b-nav-item>
    <b-nav-item :to="route({name: 'Shop'})">{{ $t('shop') }}</b-nav-item>
  </b-navbar-nav>
</template>

<script>
  export default {
    name: 'NavbarRoutes',
  };
</script>

<style scoped>

</style>
