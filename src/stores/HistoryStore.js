import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('historyStore', {
  state: () => ({
    history: [],
    loading: false
  }),
  actions: {
    async getHistory() {
      this.loading = true
      const res = await fetch('http://localhost:3000/history')
      const data = await res.json()
      this.history = data
      this.loading = false
    },
    async addToHistory(item) {
      this.history.push(item)

      const res = await fetch('http://localhost:3000/history', {
        method: 'POST',
        body: JSON.stringify({
          id: item.id.value,
          date: item.date,
          state: item.state,
          market: item.market.value,
          batch: item.batch.value,
          category: item.category.value,
          name: item.name.value,
          totalPrice: item.totalPrice.value,
          totalInStock: item.totalInStock.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }
    }
  }
})
