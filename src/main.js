import Vue from 'vue'
import App from './app.vue'
import VueResource from 'vue-resource'
import store from './commons/store.js'
import router from './commons/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/app.css'

Vue.use(ElementUI)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


