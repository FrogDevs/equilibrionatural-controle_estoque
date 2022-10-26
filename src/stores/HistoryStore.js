import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('historyStore', {
  state: () => ({
    history: [
      {
        id: 0,
        date: '10/10/2022',
        state: 'Criado',
        market: 'unidade1',
        batch: '1',
        category: 'alimenticios',
        name: 'Way Protein'
      }
    ]
  }),
  actions: {
    addToHistory(item) {
      this.history.push(item)
    }
  }
})
