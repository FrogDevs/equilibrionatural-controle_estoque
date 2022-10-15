import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    alimenticios: []
  }),
  actions: {
    addToAlimenticios(product) {
      this.alimenticios.push(product)
    }
  }
})
