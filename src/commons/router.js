import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/base/index'
import home from '@/views/home/home'
import test from '@/views/test/test'
Vue.use(VueRouter)
const routes = [{
  path: '/', component: index, 
  children: [
    { path: '/home', component: home},
    { path: '/test', component: test},
  ]
}]
const router = new VueRouter({
  routes
})
export default router
