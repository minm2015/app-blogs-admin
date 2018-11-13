import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import VueResource from 'vue-resource'
import iView from 'iview'
import AmazeVue from 'amaze-vue'
import 'iview/dist/styles/iview.css'
import 'amaze-vue/dist/amaze-vue.css'


Vue.use(iView)
Vue.use(AmazeVue)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
