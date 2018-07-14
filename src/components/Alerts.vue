<template>
  <div id="app-alerts">
    <b-alert
      :show="loginAlertDismissCountDown"
      dismissible
      variant="success"
      @dismissed="loginAlertDismissCountDown=0"
      @dismiss-count-down="updateLoginAlertDismissCountDown">

      <p>You are now successfully logged in as {{ username }}</p>
    </b-alert>
    <b-alert
      :show="applicationError !== undefined"
      dismissible
      variant="danger"
      @dismissed="setApplicationError(undefined)">
      <p>{{ applicationError }}</p>
    </b-alert>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Alerts',
    computed: mapState({
      loginAlertDismissCountDown: 'loginAlertDismissCountDown',
      username: 'username',
      applicationError: 'applicationError',
    }),
    methods: {
      updateLoginAlertDismissCountDown (loginAlertDismissCountDown) {
        this.$store.commit('updateLoginAlertDismissCountDown', loginAlertDismissCountDown);
      },
      setApplicationError (applicationError) {
        this.$store.commit('setApplicationError', applicationError);
      },
    },
  };
</script>

<style scoped>

</style>
