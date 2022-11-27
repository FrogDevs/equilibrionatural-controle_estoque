import { defineStore } from 'pinia'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/index'
import SimpleCrypto from 'simple-crypto-js'

const userCollectionRef = collection(db, 'user')

export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    isAuth: false,
    type: null,
    userId: null,
    pass: null
  }),
  getters: {
    getIsAuth(state) {
      return state.isAuth
    },
    getUserId(state) {
      return state.userId
    },
    getUserPass(state) {
      return state.pass
    },
    getUser(state) {
      return state.type
    }
  },
  actions: {
    setUserPass() {
      onSnapshot(userCollectionRef, (querySnapshot) => {
        const fbUser = []
        querySnapshot.forEach((doc) => {
          fbUser.push(doc.data())
        })
        this.userId = fbUser[0].id
        const simpleCrypto = new SimpleCrypto(this.userId)
        const cipherText = simpleCrypto.encrypt(fbUser[0].pass)
        this.pass = cipherText
      })
    },
    async setUser(boolean, type) {
      ;(this.isAuth = boolean), (this.type = type)
    }
  }
})
