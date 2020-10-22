import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Specimen from '../views/Specimen.vue'
import Data from '../views/Data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/specimen',
    name: 'Specimen',
    component: Specimen
  },
  {
    path: '/data/:id',
    name: 'Data',
    component: Data,
    props: true
  },
  {
    path: '/*',
    component: 404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
