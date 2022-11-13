import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    loading: false
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
    async getProducts() {
      this.loading = true
      const res = await fetch('http://localhost:3000/products')
      const data = await res.json()
      this.products = data
      this.loading = false
    },
    async setAddProduct(product) {
      this.products.push(product)

      const res = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
          id: product.id,
          market: product.market,
          category: product.category,
          name: product.name.value,
          batch: product.batch.value,
          amount: product.amount.value,
          price: product.price.value,
          weight: product.weight.value,
          date: product.date.value,
          image: product.image.value,
          totalPrice: product.totalPrice.value,
          SpoiledDay: product.SpoiledDay.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }
    },
    async setEditProduct(id, newValue) {
      const product = this.getId(id)
      product[0].name = newValue.name
      product[0].batch = newValue.batch
      product[0].amount = newValue.amount
      product[0].price = newValue.price
      product[0].weight = newValue.weight
      product[0].date = newValue.date
      product[0].image = newValue.image

      const res = await fetch('http://localhost:3000/products/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
          name: newValue.name.value,
          batch: newValue.batch.value,
          amount: newValue.amount.value,
          price: newValue.price.value,
          weight: newValue.weight.value,
          date: newValue.date.value,
          image: newValue.image.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }
    },
    async setDeleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id)

      const res = await fetch('http://localhost:3000/products/' + id, {
        method: 'DELETE'
      })
      if (res.error) {
        console.log(res.error)
      }
    },
    setDaysToSpoil() {
      const d = new Date()

      this.products.forEach(async (element) => {
        element.date = element.SpoiledDay - d.getDate()

        const res = await fetch(
          'http://localhost:3000/products/' + element.id,
          {
            method: 'PATCH',
            body: JSON.stringify({
              id: element.id,
              market: element.market,
              category: element.category,
              name: element.name.value,
              batch: element.batch.value,
              amount: element.amount.value,
              price: element.price.value,
              weight: element.weight.value,
              date: element.SpoiledDay - d.getDate(),
              image: element.image.value,
              totalPrice: element.totalPrice.value,
              SpoiledDay: element.SpoiledDay.value
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        if (res.error) {
          console.log(res.error)
        }
      })
    }
  }
})
