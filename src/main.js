// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/scss/bootstrap.scss';

import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import App from './App';
import './assets/styles/custom/_variables.scss';
import './assets/styles/style.scss';
import enLocale from './locales/en';
import ruLocale from './locales/ru';
import RouteManager from './plugins/RouteManager';
import router from './router';
import storeOptions from './store';

library.add(faShoppingBag);
library.add(faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

const store = new Vuex.Store(storeOptions);

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', enLocale);
Vue.i18n.add('ru', ruLocale);
Vue.i18n.set('en');

Vue.use(RouteManager, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store,
});
