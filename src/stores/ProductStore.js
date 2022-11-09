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
    getId: (state) => {
      return (id) => state.products.filter((product) => product.id === id)
    },
    getTotalPrice() {
      return this.products.reduce(
        (accumulator, curValue) => accumulator + curValue.totalPrice,
        0
      )
    },
    getDate: (state) => {
      return (n1, n2) =>
        state.products.filter(
          (product) => product.date <= n1 && product.date > n2
        )
    },
    getSpoiled() {
      return this.products.filter((product) => product.date === 0)
    }
  },
  actions: {
    setAddProduct(product) {
      this.products.push(product)
    },
    setEditProduct(id, newValue) {
      const product = this.getId(id)
      product[0].name = newValue.name
      product[0].batch = newValue.batch
      product[0].amount = newValue.amount
      product[0].price = newValue.price
      product[0].weight = newValue.weight
      product[0].date = newValue.date
      product[0].image = newValue.image
    },
    setDeleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id)
    },
    setDaysToSpoil() {
      const d = new Date()

      this.products.forEach((element) => {
        element.date = element.SpoiledDay - d.getDate()
      })
    }
  }
})
