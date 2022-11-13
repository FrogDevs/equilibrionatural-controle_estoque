import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    isAuth: false,
    type: null,
    pass: '123'
  }),
  getters: {
    getIsAuth(state) {
      return state.isAuth
    },
    getUser(state) {
      return state.type
    }
  },
  actions: {
    async setUser(type) {
      ;(this.isAuth = true), (this.type = type)
    }
  }
})
