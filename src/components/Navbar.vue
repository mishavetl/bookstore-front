<template>
  <b-navbar
    toggleable="md"
    type="default"
    variant="white">
    <b-navbar-toggle target="nav_collapse">
      <font-awesome-icon icon="bars"/>
    </b-navbar-toggle>
    <b-navbar-brand>Bookstore</b-navbar-brand>
    <b-collapse
      id="nav_collapse"
      is-nav>
      <navbar-search/>
      <navbar-routes class="ml-auto"/>
      <navbar-auth/>
      <locale-picker/>
      <shopping-cart-widget/>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import LocalePicker from './LocalePicker';
  import NavbarAuth from './NavbarAuth';
  import NavbarRoutes from './NavbarRoutes';
  import NavbarSearch from './NavbarSearch';
  import ShoppingCartWidget from './ShoppingCartWidget';

  export default {
    name: 'Navbar',
    components: {
      NavbarRoutes,
      NavbarSearch,
      ShoppingCartWidget,
      LocalePicker,
      NavbarAuth,
    },
  };
</script>

<style scoped>

</style>
