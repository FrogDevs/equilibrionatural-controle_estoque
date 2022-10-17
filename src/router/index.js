import { createRouter, createWebHistory } from 'vue-router'
import Stores from '../views/Stores.vue'
import Home from '../views/Home.vue'
import Registration from '../views/Registration.vue'
import Search from '../views/products/Search.vue'
import Details from '../views/products/Details.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Stores',
    component: Stores
  },
  {
    path: '/:market/home',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/:market/registration',
    name: 'Registration',
    component: Registration,
    props: true
  },
  {
    path: '/:market/search/:category',
    name: 'Search',
    component: Search,
    props: true
  },
  {
    path: '/:market/details/:category/:id',
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
