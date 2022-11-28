<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../router'
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import { useHistoryStore } from '../stores/HistoryStore'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheDialogue from '../components/TheDialogue.vue'
import { Network } from '@capacitor/network'

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
const showDialogue = ref(false)

const piniaProduct = {
  id: Date.now().toString(36) + Math.random().toString(36).substr(2),
  market: props.market,
  category: props.category,
  name: ref(null),
  batch: ref(null),
  amount: ref(null),
  price: ref(null),
  weight: ref(null),
  date: ref(null),
  image: ref(null),
  totalPrice: ref(null),
  SpoiledDay: ref(null)
}

const totalPrice = computed(() => {
  return piniaProduct.amount.value * piniaProduct.price.value
})

function historyDate() {
  const d = new Date()
  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  return `${day}/${month + 1}/${year} às ${hours}:${minutes}`
}

const piniaHistory = {
  id: ref(piniaProduct.id),
  date: historyDate(),
  state: 'Registrado',
  market: ref(piniaProduct.market),
  batch: ref(piniaProduct.batch),
  category: ref(piniaProduct.category),
  name: ref(piniaProduct.name),
  totalPrice: ref(piniaProduct.totalPrice),
  totalInStock: ref(null)
}

function addName(value) {
  piniaProduct.name.value = value
}
function addBatch(value) {
  piniaProduct.batch.value = value
}
function addAmount(value) {
  piniaProduct.amount.value = Number(value)
}
function addPrice(value) {
  piniaProduct.price.value = Number(value)
}
function addWeight(value) {
  piniaProduct.weight.value = value
}
function addDate(value) {
  piniaProduct.date.value = Number(value)
}
function addimage(value) {
  piniaProduct.image.value = value
}

async function addItem() {
  const status = await Network.getStatus()
  const d = new Date()

  if (status.connected) {
    piniaProduct.totalPrice.value = totalPrice.value
    piniaProduct.SpoiledDay.value = d.getDate() + piniaProduct.date.value
    productStore.setAddProduct({
      id: piniaProduct.id,
      market: piniaProduct.market,
      category: piniaProduct.category,
      name: piniaProduct.name.value,
      batch: piniaProduct.batch.value,
      amount: piniaProduct.amount.value,
      price: piniaProduct.price.value,
      weight: piniaProduct.weight.value,
      date: piniaProduct.date.value,
      image: piniaProduct.image.value,
      totalPrice: piniaProduct.totalPrice.value,
      SpoiledDay: piniaProduct.SpoiledDay.value
    })
    piniaHistory.totalInStock.value = productStore.getTotalInStock
    historyStore.addToHistory(piniaHistory)
    router.go(-1)
  } else {
    showDialogue.value = true
  }
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="flex w-full flex-col pb-8 pt-20">
    <TheDialogue
      v-if="showDialogue"
      title="Sem conexão Wifi"
      subtitle="Não foi possível salvar esse produto, certifique-se de estabelecer uma conexão Wifi valida."
      first-action="Entendi"
      @first-action="showDialogue = false"
    />
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
      <TextField title="Validade" :is-datepicker="true" @input-date="addDate" />
      <TextField title="Imagem" input-type="file" @input-img="addimage" />
      <TheButton title="Salvar" />
    </form>
  </main>
</template>
