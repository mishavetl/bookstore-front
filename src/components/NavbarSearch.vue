<template>
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
</template>

<script>
  export default {
    name: 'NavbarSearch',
  };
</script>

<style scoped>

</style>
