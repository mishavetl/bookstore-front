<template>
  <div id="login-page">
    <div class="text-center">
      <h1>{{ $t('login') }}</h1>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group id="loginUsernameFormGroup"
                    :label="$t('username label')"
                    label-for="loginUsernameInput">
        <b-form-input id="loginUsernameInput"
                      type="text"
                      v-model="form.username"
                      required
                      :placeholder="$t('enter username')">
        </b-form-input>
      </b-form-group>
      <b-form-group id="loginPasswordFormGroup"
                    :label="$t('password label')"
                    label-for="loginPasswordInput">
        <b-form-input id="loginPasswordInput"
                      type="password"
                      v-model="form.password"
                      required
                      :placeholder="$t('enter password')">
        </b-form-input>
      </b-form-group>
      <b-form-group id="rememberGroup">
        <b-form-checkbox id="rememberCheck" v-model="form.remember">{{ $t('rememberMe')}} </b-form-checkbox>
      </b-form-group>
      <div class="text-center">
        <b-button type="submit" variant="primary">{{ $t('login') }}</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      console.log(this.$store.state.API_URL)
      // TODO: authenticate
    }
  }
}
</script>

<style scoped>

</style>
