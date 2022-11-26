import { defineStore } from 'pinia'
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase/tcc_db'

// firebase refs
const productsCollectionRef = collection(db, 'products')

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
    getTotalInStock() {
      return this.products.reduce(
        (accumulator, curValue) => (accumulator += curValue.totalPrice),
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
    getProducts() {
      this.loading = true
      onSnapshot(productsCollectionRef, (querySnapshot) => {
        const fbProducts = []
        querySnapshot.forEach((doc) => {
          fbProducts.push(doc.data())
        })
        this.products = fbProducts
      })
      this.loading = false
    },
    setAddProduct(product) {
      this.products.push(product)

      setDoc(doc(productsCollectionRef, product.id), {
        id: product.id,
        market: product.market,
        category: product.category,
        name: product.name,
        batch: product.batch,
        amount: product.amount,
        price: product.price,
        weight: product.weight,
        date: product.date,
        image: product.image,
        totalPrice: product.totalPrice,
        SpoiledDay: product.SpoiledDay
      })
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

      updateDoc(doc(productsCollectionRef, id), {
        name: newValue.name.value,
        batch: newValue.batch.value,
        amount: newValue.amount.value,
        price: newValue.price.value,
        weight: newValue.weight.value,
        date: newValue.date.value,
        image: newValue.image.value
      })
    },
    setDeleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id)
      deleteDoc(doc(productsCollectionRef, id))
    },
    setDaysToSpoil() {
      const d = new Date()

      this.products.forEach((element) => {
        // element.date = element.SpoiledDay - d.getDate()
        updateDoc(doc(productsCollectionRef, element.id), {
          date: element.SpoiledDay - d.getDate()
        })
      })
    }
  }
})
