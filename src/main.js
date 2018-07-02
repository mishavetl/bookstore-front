// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import BootstrapVue from 'bootstrap-vue'
import storeOptions from './store'
import enLocale from './locales/en'
import ruLocale from './locales/ru'

Vue.use(Vuex)
Vue.use(BootstrapVue)

const store = new Vuex.Store(storeOptions)

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('en', enLocale)
Vue.i18n.add('ru', ruLocale)
Vue.i18n.set('en')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
