import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/view/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/view/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
