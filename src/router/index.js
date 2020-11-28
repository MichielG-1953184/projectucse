import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Overview from '../views/Overview.vue'
import Detail from '../views/Detail.vue'
import AddForm from '../views/AddForm.vue'

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
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/addform',
    name: 'AddForm',
    component: AddForm
  }
]

const router = new VueRouter({
  routes
})

export default router

