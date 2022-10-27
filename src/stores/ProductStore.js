import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: []
  }),
  getters: {
    getUnity: (state) => {
      return (market, category) =>
        state.products.filter(
          (product) =>
            product.market === market && product.category === category
        )
    },
    getTotalPrice() {
      return this.products.reduce(
        (accumulator, curValue) => accumulator + curValue.totalPrice,
        0
      )
    }
  },
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
    editProduct(id, newValue) {
      this.products.splice(id, 1, newValue)
    },
    deleteProduct(id) {
      this.products.splice(id, 1)
    }
  }
})
