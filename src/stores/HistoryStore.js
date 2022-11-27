import { defineStore } from 'pinia'
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '../firebase/index'

// firebase refs
const historyCollectionRef = collection(db, 'history')
const historyCollectionQuery = query(
  historyCollectionRef,
  orderBy('now', 'desc')
)

export const useHistoryStore = defineStore('historyStore', {
  state: () => ({
    history: [],
    loading: false
  }),
  actions: {
    getHistory() {
      this.loading = true
      onSnapshot(historyCollectionQuery, (querySnapshot) => {
        const fbHistory = []
        querySnapshot.forEach((doc) => {
          fbHistory.push(doc.data())
        })
        this.history = fbHistory
      })
      this.loading = false
    },
    addToHistory(item) {
      this.history.push(item)
      addDoc(historyCollectionRef, {
        id: item.id.value,
        date: item.date,
        state: item.state,
        market: item.market.value,
        batch: item.batch.value,
        category: item.category.value,
        name: item.name.value,
        totalPrice: item.totalPrice.value,
        totalInStock: item.totalInStock.value,
        now: Date.now()
      })
    }
  }
})
