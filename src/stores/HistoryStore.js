import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('historyStore', {
  state: () => ({
    history: []
  }),
  actions: {
    addToHistory(item) {
      this.history.push(item)
    }
  }
})
