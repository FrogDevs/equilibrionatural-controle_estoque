import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'loggedInUser',
  state: () => ({
    isAuth: false,
    user: null
  }),
  getters: {
    getIsAuth(state) {
      return state.isAuth
    },
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    setAuth(boolean) {
      this.isAuth = boolean
    }
  }
})
