import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import VueResource from 'vue-resource'
import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'
import './assets/css/amazeui.min.css'
import './assets/css/app.css'


Vue.use(AmazeVue)
Vue.use(VueResource)
Vue.prototype.current_model = 'index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
