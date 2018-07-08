<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="default">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand :to="route({name: 'Index'})">Bookstore</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" :placeholder="$t('navbar search')"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">{{ $t('search') }}</b-button>
          </b-nav-form>
          <b-nav-item :to="route({name: 'Books'})">Books</b-nav-item>
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
            <b-dropdown-item :to="route({name: 'Profile'})">{{ $t('profile') }}</b-dropdown-item>
            <b-dropdown-item @click="signOut">{{ $t('signout') }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-show="!signedIn"  v-b-modal.loginModal>{{ $t('login') }}</b-nav-item>
          <b-nav-item v-show="!signedIn" v-b-modal.registerModal>{{ $t('registration') }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal hide-footer id="loginModal" ref="loginModal">
      <Login @exit="hideLoginModal"/>
    </b-modal>
    <b-modal hide-footer id="registerModal" ref="registerModal">
      <Register @exit="hideRegisterModal"/>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Login from './components/Login'
import Register from './components/Register'
import AuthService from './services/AuthService'
export default {
  name: 'Navbar',
  components: {
    Login,
    Register
  },
  computed: mapState({
    signedIn: state => state.user.email !== undefined,
    username: state => state.user.email,
    locales: state =>
      Object.keys(state.i18n.translations)
  }),
  methods: {
    hideLoginModal () {
      this.$refs.loginModal.hide()
    },
    hideRegisterModal () {
      this.$refs.registerModal.hide()
    },
    signOut () {
      AuthService.signOut(this.$store, this.$i18n)
      this.$store.commit('deauthenticate')
    }
  }
}
</script>

<style scoped>

</style>
