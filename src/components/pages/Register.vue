<template>
  <div id="register-page">
    <div class="text-center">
      <h1>{{ $t('registration') }}</h1>
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
      <b-form-group
        id="registerEmailFormGroup"
        :label="$t('email label')"
        label-for="registerEmailInput">
        <b-form-input
          id="registerEmailInput"
          v-model="form.email"
          :state="!$v.form.email.$invalid"
          :placeholder="$t('enter email')"
          type="text"
          name="email"
          aria-describedby="registerEmailLiveFeedback"
          required/>
        <b-form-invalid-feedback id="registerEmailLiveFeedback">
          {{ $t('email is required and must be valid') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="registerPasswordFormGroup"
        :label="$t('password label')"
        label-for="registerPasswordInput">
        <b-form-input
          id="registerPasswordInput"
          v-model="form.password"
          :state="!$v.form.password.$invalid"
          :placeholder="$t('enter password')"
          type="password"
          name="password"
          aria-describedby="registerPasswordLiveFeedback"
          required/>
        <b-form-invalid-feedback id="registerPasswordLiveFeedback">
          {{ $t('field is required and must be 6 characters') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="registerPasswordConfirmFormGroup"
        :label="$t('password confirmation label')"
        label-for="registerPasswordConfirmInput">
        <b-form-input
          id="registerPasswordConfirmInput"
          v-model="form.passwordConfirmation"
          :state="!$v.form.passwordConfirmation.$invalid"
          :placeholder="$t('enter password confirmation')"
          type="password"
          name="passwordConfirmation"
          aria-describedby="registerPasswordConfirmLiveFeedback"
          required/>
        <b-form-invalid-feedback id="registerPasswordConfirmLiveFeedback">
          {{ $t('field must be identical to the one above') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <div class="text-center">
        <b-button
          :disabled="$v.form.$invalid"
          type="submit"
          variant="primary">{{ $t('register') }}
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService';
  import {validationMixin} from 'vuelidate';
  import {email, minLength, required, sameAs} from 'vuelidate/lib/validators';

  export default {
    name: 'Register',
    mixins: [validationMixin],
    data () {
      return {
        form: {
          email: '',
          password: '',
          passwordConfirmation: '',
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
        passwordConfirmation: {
          required,
          sameAsPassword: sameAs('password'),
        },
      },
    },
    methods: {
      parseErrors: function (errors) {
        if (errors.email) errors.email = errors.full_messages[0];
        return errors;
      },
      onSubmit: function () {
        this.errors = {};
        AuthService.register(this.$store, this.$i18n, {
          email: this.form.email,
          password: this.form.password,
        })
          .then(response => {
            console.log(response);
            this.$emit('exit', true);
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = this.parseErrors(error.response.data.errors);
            } else {
              this.errors = {
                serverError: true,
              };
            }
          });
      },
    },
  };
</script>

<style scoped>

</style>
