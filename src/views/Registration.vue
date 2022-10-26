<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed } from 'vue'
import router from '../router'
import { useProductStore } from '../stores/ProductStore'
import { useHistoryStore } from '../stores/HistoryStore'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheDivider from '../components/TheDivider.vue'

const props = defineProps({
  market: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  }
})

const productStore = useProductStore()
const historyStore = useHistoryStore()
const itemSaved = ref(false)

const piniaProduct = {
  id: productStore.products.length,
  market: props.market,
  category: props.category,
  name: ref(null),
  batch: ref(null),
  amount: ref(null),
  price: ref(null),
  weight: ref(null),
  date: ref(null),
  image: ref(null)
}

function historyDate() {
  const d = new Date()
  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  return `${day}/${month + 1}/${year} às ${hours}:${minutes}`
}

const totalPrice = computed(() => {
  return piniaProduct.amount.value * piniaProduct.price.value
})

const piniaHistory = {
  id: ref(piniaProduct.id),
  date: historyDate(),
  state: 'Registrado',
  market: ref(piniaProduct.market),
  batch: ref(piniaProduct.batch),
  category: ref(piniaProduct.category),
  name: ref(piniaProduct.name),
  totalPrice: totalPrice
}

function addName(value) {
  piniaProduct.name.value = value
}
function addAmount(value) {
  piniaProduct.amount.value = Number(value)
}
function addBatch(value) {
  piniaProduct.batch.value = value
}
function addPrice(value) {
  piniaProduct.price.value = Number(value)
}
function addWeight(value) {
  piniaProduct.weight.value = value
}
function addDate(value) {
  piniaProduct.date.value = value
}
function addimage(value) {
  piniaProduct.image.value = value
}

function addItem() {
  console.log(piniaHistory.totalPrice.value)
  productStore.addProduct(piniaProduct)
  historyStore.addToHistory(piniaHistory)
  itemSaved.value = true
  router.go(-1)
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="flex w-full flex-col pb-2 pt-[4rem]">
    <TheDivider subtitle="Cadastrar produtos" />
    <form
      class="flex flex-col items-center gap-4 px-4"
      @submit.prevent="addItem"
    >
      <TextField title="Nome" input-type="text" @input-value="addName" />
      <TextField title="Lote" input-type="text" @input-value="addBatch" />
      <TextField
        title="Quantidade"
        input-type="number"
        @input-value="addAmount"
      />
      <TextField title="Preço R$" input-type="number" @input-value="addPrice" />
      <TextField title="Peso" input-type="text" @input-value="addWeight" />
      <TextField title="Validade" input-type="date" @input-value="addDate" />
      <TextField title="Imagem" input-type="file" @input-value="addimage" />
      <TheButton title="Salvar" />
    </form>
  </main>
</template>
