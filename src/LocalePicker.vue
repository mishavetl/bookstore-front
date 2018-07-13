<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown
      :text="$t($i18n.locale())"
      right>
      <b-dropdown-item
        v-for="locale in locales"
        :key="locale"
        @click="translate(locale)">{{ $t(locale) }}
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'LocalePicker',
    computed: mapState({
      locales: state =>
        Object.keys(state.i18n.translations),
    }),
  };
</script>

<style scoped>

</style>
