<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="default">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">Bookstore</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" :placeholder="$t('navbar search')"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">{{ $t('search') }}</b-button>
          </b-nav-form>
          <!--<b-nav-item href="#">Link</b-nav-item>-->
          <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown :text="$t($i18n.locale())" right>
            <!-- eslint-disable-next-line -->
            <b-dropdown-item v-for="locale in locales" v-on:click="translate(locale)">{{ $t(locale) }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-show="signedIn" right>
            <template slot="button-content">
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item href="#/profile">{{ $t('profile') }}</b-dropdown-item>
            <b-dropdown-item href="#/signOut">{{ $t('signout') }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-show="!signedIn"  v-b-modal.loginModal>{{ $t('login') }}</b-nav-item>
          <b-nav-item v-show="!signedIn" v-b-modal.registerModal>{{ $t('registration') }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal hide-footer id="loginModal">
      <Login/>
    </b-modal>
    <b-modal hide-footer id="registerModal">
      <Register/>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Login from './components/Login'
import Register from './components/Register'
export default {
  name: 'Navbar',
  components: {
    Login,
    Register
  },
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
