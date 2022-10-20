import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: []
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
    editProduct(id, newValue) {
      this.products.splice(id, 1, newValue)
    },
    deleteProduct(id) {
      this.products = this.products.filter((product) => {
        return product.id !== id
      })
    }
  }
})
