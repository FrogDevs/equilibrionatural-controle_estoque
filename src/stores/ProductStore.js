import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    alimenticios: [
      {
        id: 0,
        name: 'Way Protein',
        amount: 1,
        price: 'R$ 2,00',
        weight: '10kg',
        date: '04/04/2023'
      }
    ]
  }),
  actions: {
    addToAlimenticios(product) {
      this.alimenticios.push(product)
    }
  }
})
