import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Overview from '../views/Overview.vue'
import Detail from '../views/Detail.vue'
import Edit from '../views/Edit.vue'
import OverviewDpo from '../views/OverViewDpo.vue'
import DetailDpo from '../views/DetailDpo.vue'
import Review from "../views/Review.vue"
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
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/addform',
    name: 'AddForm',
    component: AddForm
  },
  {
    path:"/overviewdpo",
    name:"overviewdpo",
    component: OverviewDpo
  },
  {
    path:"/detaildpo/:id",
    name:"detaildpo",
    component: DetailDpo
  },
  {
    path:"/review/:id",
    name:"Review",
    component: Review
  }
]

const router = new VueRouter({
  routes
})

export default router

