<template>
  <b-navbar toggleable="md" type="light" variant="default">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/">Bookstore</b-navbar-brand>

    <!--<b-collapse is-nav id="nav_collapse">-->
      <!--<b-navbar-nav>-->
        <!--<b-nav-item href="#">Link</b-nav-item>-->
        <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
      <!--</b-navbar-nav>-->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" :placeholder="$t('navbar search')"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">{{ $t('search') }}</b-button>
        </b-nav-form>

        <b-nav-item-dropdown :text="$t($i18n.locale())" right>
          <b-dropdown-item v-for="locale in locales" v-on:click="translate(locale)">{{ $t(locale) }}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-if="signedIn" right>
          <template slot="button-content">
            <em>{{ username }}</em>
          </template>
          <b-dropdown-item href="#/profile">{{ $t('profile') }}</b-dropdown-item>
          <b-dropdown-item href="#/signOut">{{ $t('signout') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-else href="#/login">{{ $t('login') }}</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: mapState({
    signedIn: state => state.authToken != null,
    username: 'username',
    language: 'language',
    locales: state =>
      Object.keys(state.i18n.translations)
  }),
  methods: {
    translate: function (language) {
      this.$i18n.set(language)
    }
  }
}
</script>

<style scoped>

</style>
