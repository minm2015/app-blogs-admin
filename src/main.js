import Vue from 'vue'
import App from './app.vue'
import VueResource from 'vue-resource'
import AmazeVue from 'amaze-vue'
import store from './commons/store.js'
import router from './commons/router.js'
import 'amaze-vue/dist/amaze-vue.css'
import './assets/css/amazeui.min.css'
import './assets/css/app.css'

Vue.use(AmazeVue)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


