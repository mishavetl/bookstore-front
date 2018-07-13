<template>
  <b-navbar-nav>
    <b-nav-item-dropdown
      v-show="signedIn"
      right>
      <template slot="button-content">
        {{ username }}
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
  </b-navbar-nav>
</template>

<script>
  import {mapState} from 'vuex';
  import Login from './components/Login';
  import Register from './components/Register';
  import AuthService from './services/AuthService';

  export default {
    name: 'NavbarAuth',
    components: {
      Login,
      Register,
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
