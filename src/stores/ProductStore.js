import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      {
        id: 0,
        market: 'unidade1',
        category: 'Alimentícios',
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
        category: 'Alimentícios',
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
      return (market, category) =>
        state.products.filter(
          (product) =>
            product.market === market && product.category === category
        )
    }
  },
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
    editFromAlimenticios(id, newValue) {
      this.products.splice(id, 1, newValue)
    },
    deleteFromAlimenticios(id) {
      this.products = this.products.filter((product) => {
        return product.id !== id
      })
    }
  }
})
