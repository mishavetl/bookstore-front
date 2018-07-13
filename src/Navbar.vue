<template>
  <div>
    <b-navbar
      toggleable="md"
      type="default">
      <b-navbar-toggle target="nav_collapse"/>

      <b-navbar-brand>Bookstore</b-navbar-brand>

      <b-collapse
        id="nav_collapse"
        is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input
              :placeholder="$t('navbar search')"
              size="sm"
              class="mr-sm-2"
              type="text"/>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit">{{ $t('search') }}
            </b-button>
          </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav
          class="ml-auto">
          <b-nav-item :to="route({name: 'Index'})">{{ $t('home') }}</b-nav-item>
          <b-nav-item :to="route({name: 'Shop'})">{{ $t('shop') }}</b-nav-item>
        </b-navbar-nav>
        <NavbarAuth/>
        <LocalePicker/>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import LocalePicker from './LocalePicker';
  import NavbarAuth from './NavbarAuth';

  export default {
    name: 'Navbar',
    components: {
      LocalePicker,
      NavbarAuth,
    },
  };
</script>

<style scoped>

</style>
