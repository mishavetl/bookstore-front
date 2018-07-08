<template>
  <div id="login-page">
    <div class="text-center">
      <h1>{{ $t('login') }}</h1>
    </div>
    <b-form @submit.prevent="onSubmit">
      <b-alert variant="danger"
               dismissible
               :show="errors.serverError !== undefined"
               @dismissed="errors.serverError=undefined">{{ $t('an error occurred') }}</b-alert>
      <b-alert variant="danger"
               dismissible
               :show="errors.email !== undefined"
               @dismissed="errors.email=undefined">{{ errors.email }}</b-alert>
      <b-alert variant="danger"
               dismissible
               :show="errors.password !== undefined"
               @dismissed="errors.password=undefined">{{ errors.password }}</b-alert>
      <b-alert variant="danger"
               dismissible
               :show="errors.serverMessage !== undefined"
               @dismissed="errors.serverMessage=undefined">{{ errors.serverMessage }}</b-alert>
      <b-form-group id="loginEmailFormGroup"
                    :label="$t('email label')"
                    label-for="loginEmailInput">
        <b-form-input id="loginEmailInput"
                      type="text"
                      v-model="form.email"
                      :state="!$v.form.email.$invalid"
                      aria-describedby="loginEmailLiveFeedback"
                      required
                      :placeholder="$t('enter email')">
        </b-form-input>
        <b-form-invalid-feedback id="loginEmailLiveFeedback">
          {{ $t('email is required and must be valid') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="loginPasswordFormGroup"
                    :label="$t('password label')"
                    label-for="loginPasswordInput">
        <b-form-input id="loginPasswordInput"
                      type="password"
                      v-model="form.password"
                      :state="!$v.form.password.$invalid"
                      aria-describedby="loginPasswordLiveFeedback"
                      required
                      :placeholder="$t('enter password')">
        </b-form-input>
        <b-form-invalid-feedback id="loginPasswordLiveFeedback">
          {{ $t('field is required and must be 6 characters') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="rememberGroup">
        <b-form-checkbox id="rememberCheck" v-model="form.remember">{{ $t('rememberMe')}} </b-form-checkbox>
      </b-form-group>
      <div class="text-center">
        <b-button type="submit" variant="primary"
                  :disabled="$v.form.$invalid">{{ $t('login') }}</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import AuthService from '@/services/AuthService'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      errors: {}
    }
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    parseErrors: function (errors) {
      if (errors.email) errors.email = errors.email[0]
      if (errors.password) errors.email = errors.password[0]
      return errors
    },

    login: function () {
      this.$store.commit('rememberAuth', this.form.remember)
      AuthService.login(this.$store, this.$i18n, {
        email: this.form.email,
        password: this.form.password
      })
        .then(response => {
          console.log(response)
          this.$store.commit('authenticate', response)
          this.$emit('exit', true)
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = this.parseErrors(error.response.data.full_messages)
          } else if (error.response.status === 401) {
            this.errors = {
              serverMessage: error.response.data.errors[0]
            }
          } else {
            this.errors = {
              serverError: true
            }
          }
        })
    },
    onSubmit: function () {
      this.errors = {}
      this.login()
    }
  }
}
</script>

<style scoped>

</style>
