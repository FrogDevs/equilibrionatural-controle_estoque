import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    alimenticios: [
      {
        id: 0,
        market: 'unidade1',
        name: 'Oi',
        amount: 1,
        price: 2.0,
        weight: '20kg',
        date: '10/10/2010',
        image: '/'
      },
      {
        id: 1,
        market: 'unidade2',
        name: 'Eae',
        amount: 1,
        price: 2.0,
        weight: '20kg',
        date: '10/10/2010',
        image: '/'
      }
    ]
  }),
  getters: {
    unity: (state) => {
      return (market) =>
        state.alimenticios.filter((product) => product.market === market)
    }
  },
  actions: {
    addProduct(product, place) {
      if (place === 'Alimentícios') {
        this.alimenticios.push(product)
      }
    }
    // editFromAlimenticios(id, newValue) {
    //   this.alimenticios.splice(id, 1, newValue)
    // },
    // deleteFromAlimenticios(id) {
    //   this.alimenticios = this.alimenticios.filter((product) => {
    //     return product.id !== id
    //   })
    // }
  }
})
