<template>
  <div id="register-page">
    <div class="text-center">
      <h1>{{ $t('registration') }}</h1>
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
      <b-form-group id="registerEmailFormGroup"
                    :label="$t('email label')"
                    label-for="registerEmailInput">
        <b-form-input id="registerEmailInput"
                      type="text"
                      name="email"
                      v-model="form.email"
                      :state="!$v.form.email.$invalid"
                      aria-describedby="registerEmailLiveFeedback"
                      required
                      :placeholder="$t('enter email')">
        </b-form-input>
        <b-form-invalid-feedback id="registerEmailLiveFeedback">
          {{ $t('email is required and must be valid') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="registerPasswordFormGroup"
                    :label="$t('password label')"
                    label-for="registerPasswordInput">
        <b-form-input id="registerPasswordInput"
                      type="password"
                      name="password"
                      v-model="form.password"
                      :state="!$v.form.password.$invalid"
                      aria-describedby="registerPasswordLiveFeedback"
                      required
                      :placeholder="$t('enter password')">
        </b-form-input>
        <b-form-invalid-feedback id="registerPasswordLiveFeedback">
          {{ $t('field is required and must be 6 characters') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="registerPasswordConfirmFormGroup"
                    :label="$t('password confirmation label')"
                    label-for="registerPasswordConfirmInput">
        <b-form-input id="registerPasswordConfirmInput"
                      type="password"
                      name="passwordConfirmation"
                      v-model="form.passwordConfirmation"
                      :state="!$v.form.passwordConfirmation.$invalid"
                      aria-describedby="registerPasswordConfirmLiveFeedback"
                      required
                      :placeholder="$t('enter password confirmation')">
        </b-form-input>
        <b-form-invalid-feedback id="registerPasswordConfirmLiveFeedback">
          {{ $t('field must be identical to the one above') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <div class="text-center">
        <b-button type="submit"
                  variant="primary"
                  :disabled="$v.form.$invalid">{{ $t('register') }}</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        email: '',
        password: '',
        passwordConfirmation: ''
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
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    parseErrors: function (errors) {
      if (errors.email) errors.email = errors.full_messages[0]
      return errors
    },
    onSubmit: function () {
      this.errors = {}
      AuthService.register(this.$store, this.$i18n, {
        email: this.form.email,
        password: this.form.password
      })
        .then(response => {
          console.log(response)
          this.$emit('exit', true)
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = this.parseErrors(error.response.data.errors)
          } else {
            this.errors = {
              serverError: true
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
