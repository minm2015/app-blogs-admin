import Vue from 'vue'
import VueRouter from 'vue-router'
import article from '@/views/article'
import article_detail from '@/views/article_detail'
import tag from '@/views/tag'
import tag_detail from '@/views/tag_detail'
import tag_add from '@/views/tag_add'
Vue.use(VueRouter)
const routes = [
  { path: '/article', component: article, name: 'article' },
  { path: '/article/:id', component: article_detail, name: 'article_detail'},
  { path: '/tag', component: tag, name: 'tag'},
  { path: '/tag/add', component: tag_add, name: 'tag_add'},
  { path: '/tag/:id', component: tag_detail, name: 'tag_detail'},
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
