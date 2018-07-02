<template>
  <div id="app-alerts">
    <b-alert :show="loginAlertDismissCountDown"
             dismissible
             variant="success"
             @dismissed="loginAlertDismissCountDown=0"
             @dismiss-count-down="updateLoginAlertDismissCountDown">

      <p>You are now successfully logged in as {{ username }}</p>
    </b-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Alerts',
  computed: mapState({
    loginAlertDismissCountDown: 'loginAlertDismissCountDown',
    username: 'username'
  }),
  methods: {
    updateLoginAlertDismissCountDown (loginAlertDismissCountDown) {
      this.$store.commit('updateLoginAlertDismissCountDown', loginAlertDismissCountDown)
    }
  }
}
</script>

<style scoped>

</style>
