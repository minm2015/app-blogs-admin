import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index'
import welcome from '@/views/welcome/welcome'
import my from '@/views/my/my'
import project from '@/views/project/project'
Vue.use(VueRouter)
const routes = [
  {
    path: '/', component: index, 
    children: [
      {path: 'welcome', component: welcome},
      {path: 'my', component: my},
      {path: 'project', component: project},
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
