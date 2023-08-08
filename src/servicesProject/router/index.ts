import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PostDetailView from '../views/PostDetailView.vue' 
import HomeServicesView from '../views/HomeServicesView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: to => {
      return { name: 'home' }
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeServicesView
  },
  {
    path: '/post-detail/:id',
    name: 'postDetail',
    component: PostDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
