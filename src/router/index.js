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

import { useUserStore } from '../stores/UserStore'

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
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  {
    path: '/:user/:market/home',
    name: 'Home',
    component: Home,
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  {
    path: '/:user/:market/search/:category',
    name: 'Search',
    component: Search,
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  {
    path: '/:market/:category/registration',
    name: 'Registration',
    component: Registration,
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  {
    path: '/:user/:market/details/:category/:id',
    name: 'Details',
    component: Details,
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  {
    path: '/:user/:market/history',
    name: 'ProductHistory',
    component: ProductHistory,
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  {
    path: '/:user/:market/notifications',
    name: 'Notifications',
    component: Notifications,
    props: true,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    beforeEnter: (to, from, next) => {
      const userAuth = useUserStore()

      if (!userAuth.getisAuth) {
        next({ name: 'UserLogin' })
      }
      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
