<template>
  <div id="login-page">
    <h1>{{ $t('login') }}</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="usernameFormGroup"
                    :label="$t('username label')"
                    label-for="usernameInput">
        <b-form-input id="usernameInput"
                      type="text"
                      v-model="form.username"
                      required
                      :placeholder="$t('enter username')">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordFormGroup"
                    :label="$t('password label')"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="form.password"
                      required
                      :placeholder="$t('enter password')">
        </b-form-input>
      </b-form-group>
      <b-form-group id="rememberGroup">
        <b-form-checkbox id="rememberCheck" v-model="form.remember">{{ $t('rememberMe')}} </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">{{ $t('login') }}</b-button>
    </b-form>
  </div>
</template>

<script>
// import axios from 'axios'
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
      // TODO: authenticate
    }
  }
}
</script>

<style scoped>

</style>
