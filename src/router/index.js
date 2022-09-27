import { createRouter, createWebHistory } from 'vue-router'
import Stores from '../views/Stores.vue'
import Home from '../views/Home.vue'
import Registration from '../views/Registration.vue'
import Details from '../views/products/Details.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Stores',
    component: Stores
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/products/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
