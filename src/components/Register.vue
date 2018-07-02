<template>
  <div id="register-page">
    <h1>{{ $t('registration') }}</h1>
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
      <b-form-group id="emailFormGroup"
                    :label="$t('email label')"
                    label-for="emailInput">
        <b-form-input id="emailInput"
                      type="text"
                      v-model="form.email"
                      required
                      :placeholder="$t('enter email')">
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
      <div class="text-center">
        <b-button type="submit" variant="primary">{{ $t('register') }}</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: ''
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
