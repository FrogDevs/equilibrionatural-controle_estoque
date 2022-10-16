import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    alimenticios: [
      {
        id: 0,
        name: 'Teste',
        amount: 1,
        price: 2.0,
        weight: '20kg',
        date: '10/10/2010',
        image: '/'
      }
    ]
  }),
  actions: {
    addToAlimenticios(product) {
      this.alimenticios.push(product)
    },
    editFromAlimenticios(id, newValue) {
      this.alimenticios.splice(id, 0, newValue)
    },
    deleteFromAlimenticios(id) {
      this.alimenticios = this.alimenticios.filter((p) => {
        return p.id !== id
      })
    }
  }
})
