import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Overview from '../views/Overview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  }
]

const router = new VueRouter({
  routes
})

export default router
