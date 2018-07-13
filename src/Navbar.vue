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
          <b-nav-item :to="route({name: 'Books'})">Books</b-nav-item>
          <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        </b-navbar-nav>

        <LocalePicker/>

        <!-- Right aligned nav items -->
        <b-navbar-nav right>
          <b-nav-item-dropdown
            v-show="signedIn"
            right>
            <template slot="button-content">
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item :to="route({name: 'Profile'})">{{ $t('profile') }}</b-dropdown-item>
            <b-dropdown-item @click="signOut">{{ $t('signout') }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item
            v-b-modal.loginModal
            v-show="!signedIn">{{ $t('login') }}
          </b-nav-item>
          <b-nav-item
            v-b-modal.registerModal
            v-show="!signedIn">{{ $t('registration') }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal
      id="loginModal"
      ref="loginModal"
      hide-footer>
      <Login @exit="hideLoginModal"/>
    </b-modal>
    <b-modal
      id="registerModal"
      ref="registerModal"
      hide-footer>
      <Register @exit="hideRegisterModal"/>
    </b-modal>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Login from './components/Login';
  import Register from './components/Register';
  import LocalePicker from './LocalePicker';
  import AuthService from './services/AuthService';

  export default {
    name: 'Navbar',
    components: {
      Login,
      Register,
      LocalePicker,
    },
    computed: mapState({
      signedIn: state => state.user.email !== undefined,
      username: state => state.user.email,
    }),
    methods: {
      hideLoginModal () {
        this.$refs.loginModal.hide();
      },
      hideRegisterModal () {
        this.$refs.registerModal.hide();
      },
      signOut () {
        AuthService.signOut(this.$store, this.$i18n);
        this.$store.commit('deauthenticate');
      },
    },
  };
</script>

<style scoped>

</style>
