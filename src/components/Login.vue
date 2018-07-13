<template>
  <div id="login-page">
    <div class="text-center">
      <h1>{{ $t('login') }}</h1>
    </div>
    <b-form @submit.prevent="onSubmit">
      <b-alert
        :show="errors.serverError !== undefined"
        variant="danger"
        dismissible
        @dismissed="errors.serverError=undefined">{{ $t('an error occurred') }}
      </b-alert>
      <b-alert
        :show="errors.email !== undefined"
        variant="danger"
        dismissible
        @dismissed="errors.email=undefined">{{ errors.email }}
      </b-alert>
      <b-alert
        :show="errors.password !== undefined"
        variant="danger"
        dismissible
        @dismissed="errors.password=undefined">{{ errors.password }}
      </b-alert>
      <b-alert
        :show="errors.serverMessage !== undefined"
        variant="danger"
        dismissible
        @dismissed="errors.serverMessage=undefined">{{ errors.serverMessage }}
      </b-alert>
      <b-form-group
        id="loginEmailFormGroup"
        :label="$t('email label')"
        label-for="loginEmailInput">
        <b-form-input
          id="loginEmailInput"
          v-model="form.email"
          :state="!$v.form.email.$invalid"
          :placeholder="$t('enter email')"
          type="text"
          aria-describedby="loginEmailLiveFeedback"
          required/>
        <b-form-invalid-feedback id="loginEmailLiveFeedback">
          {{ $t('email is required and must be valid') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="loginPasswordFormGroup"
        :label="$t('password label')"
        label-for="loginPasswordInput">
        <b-form-input
          id="loginPasswordInput"
          v-model="form.password"
          :state="!$v.form.password.$invalid"
          :placeholder="$t('enter password')"
          type="password"
          aria-describedby="loginPasswordLiveFeedback"
          required/>
        <b-form-invalid-feedback id="loginPasswordLiveFeedback">
          {{ $t('field is required and must be 6 characters') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="rememberGroup">
        <b-form-checkbox
          id="rememberCheck"
          v-model="form.remember">{{ $t('rememberMe') }}
        </b-form-checkbox>
      </b-form-group>
      <div class="text-center">
        <b-button
          :disabled="$v.form.$invalid"
          type="submit"
          variant="primary">{{ $t('login') }}
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService';
  import {validationMixin} from 'vuelidate';
  import {email, minLength, required} from 'vuelidate/lib/validators';

  export default {
    name: 'Login',
    mixins: [validationMixin],
    data () {
      return {
        form: {
          email: '',
          password: '',
          remember: false,
        },
        errors: {},
      };
    },
    validations: {
      form: {
        email: {
          email,
          required,
        },
        password: {
          required,
          minLength: minLength(6),
        },
      },
    },
    methods: {
      parseErrors: function (errors) {
        if (errors.email) errors.email = errors.email[0];
        if (errors.password) errors.email = errors.password[0];
        return errors;
      },

      login: function () {
        this.$store.commit('rememberAuth', this.form.remember);
        AuthService.login(this.$store, this.$i18n, {
          email: this.form.email,
          password: this.form.password,
        })
          .then(response => {
            console.log(response);
            this.$store.commit('authenticate', response);
            this.$emit('exit', true);
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = this.parseErrors(error.response.data.full_messages);
            } else if (error.response.status === 401) {
              this.errors = {
                serverMessage: error.response.data.errors[0],
              };
            } else {
              this.errors = {
                serverError: true,
              };
            }
          });
      },
      onSubmit: function () {
        this.errors = {};
        this.login();
      },
    },
  };
</script>

<style scoped>

</style>
