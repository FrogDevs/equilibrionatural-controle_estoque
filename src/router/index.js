import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../views/UserLogin.vue'
import Stores from '../views/Stores.vue'
import Home from '../views/Home.vue'
import Search from '../views/products/Search.vue'
import Registration from '../views/Registration.vue'
import Details from '../views/products/Details.vue'
import ProductHistory from '../views/products/ProductHistory.vue'
import Notifications from '../views/TheNotifications.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/:user/stores',
    name: 'Stores',
    component: Stores,
    props: true
  },
  {
    path: '/:user/:market/home',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/:user/:market/search/:category',
    name: 'Search',
    component: Search,
    props: true
  },
  {
    path: '/:market/:category/registration',
    name: 'Registration',
    component: Registration,
    props: true
  },
  {
    path: '/:user/:market/details/:category/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/:user/:market/history',
    name: 'ProductHistory',
    component: ProductHistory,
    props: true
  },
  {
    path: '/:user/:market/notifications',
    name: 'Notifications',
    component: Notifications,
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
