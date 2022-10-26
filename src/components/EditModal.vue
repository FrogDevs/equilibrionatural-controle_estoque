<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import { useHistoryStore } from '../stores/HistoryStore'
import TheDivider from './TheDivider.vue'
import TextField from './TextField.vue'

const productStore = useProductStore()
const historyStore = useHistoryStore()

const props = defineProps({
  productId: {
    type: Number,
    default: null
  },
  market: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  }
})

const piniaEditProduct = {
  id: ref(productStore.products[props.productId].id),
  market: ref(productStore.products[props.productId].market),
  category: ref(productStore.products[props.productId].category),
  name: ref(productStore.products[props.productId].name),
  batch: ref(productStore.products[props.productId].batch),
  amount: ref(productStore.products[props.productId].amount),
  price: ref(productStore.products[props.productId].price),
  weight: ref(productStore.products[props.productId].weight),
  date: ref(productStore.products[props.productId].date),
  image: ref(productStore.products[props.productId].image)
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
  return piniaEditProduct.amount.value * piniaEditProduct.price.value
})

const piniaHistory = {
  id: ref(piniaEditProduct.id),
  date: historyDate(),
  state: 'Editado',
  market: ref(piniaEditProduct.market),
  batch: ref(piniaEditProduct.batch),
  category: ref(piniaEditProduct.category),
  name: ref(piniaEditProduct.name),
  totalPrice: totalPrice
}

function addName(value) {
  piniaEditProduct.name.value = value
}
function addBatch(value) {
  piniaEditProduct.batch.value = value
}
function addAmount(value) {
  piniaEditProduct.amount.value = value
}
function addPrice(value) {
  piniaEditProduct.price.value = value
}
function addWeight(value) {
  piniaEditProduct.weight.value = value
}
function addDate(value) {
  piniaEditProduct.date.value = value
}
function addimage(value) {
  piniaEditProduct.image.value = value
}

const emit = defineEmits(['closeEdit'])

function closeEdit() {
  emit('closeEdit')
}

function editSave() {
  productStore.editProduct(props.productId, piniaEditProduct)
  historyStore.addToHistory(piniaHistory)
  emit('closeEdit')
}
</script>
<template>
  <div
    class="absolute inset-0 z-20 my-auto flex h-fit w-full flex-col bg-white pt-6"
  >
    <TheDivider subtitle="Editar produto" />
    <form class="flex flex-col gap-4 px-4">
      <TextField title="Nome" input-type="text" @input-value="addName" />
      <TextField
        title="Quantidade"
        input-type="number"
        @input-value="addAmount"
      />
      <TextField title="Lote" input-type="text" @input-value="addBatch" />
      <TextField title="Preço R$" input-type="number" @input-value="addPrice" />
      <TextField title="Peso" input-type="text" @input-value="addWeight" />
      <TextField title="Validade" input-type="date" @input-value="addDate" />
      <TextField title="Imagem" input-type="file" @input-value="addimage" />
    </form>
    <div class="flex items-end justify-end gap-8 py-6 px-4">
      <p
        class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
        @click="closeEdit"
      >
        Cancelar
      </p>
      <p
        class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
        @click="editSave"
      >
        Salvar
      </p>
    </div>
  </div>
</template>
