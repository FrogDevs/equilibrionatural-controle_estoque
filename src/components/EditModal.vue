<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import { useHistoryStore } from '../stores/HistoryStore'
import TextField from './TextField.vue'

const productStore = useProductStore()
const historyStore = useHistoryStore()

const props = defineProps({
  product: {
    type: Object,
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
  id: ref(props.product.id),
  market: ref(props.product.market),
  category: ref(props.product.category),
  name: ref(props.product.name),
  batch: ref(props.product.batch),
  amount: ref(props.product.amount),
  price: ref(props.product.price),
  weight: ref(props.product.weight),
  date: ref(props.product.date),
  image: ref(props.product.image),
  totalPrice: ref(props.product.totalPrice)
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

const piniaHistory = {
  id: ref(piniaEditProduct.id),
  date: historyDate(),
  state: 'Editado',
  market: ref(piniaEditProduct.market),
  batch: ref(piniaEditProduct.batch),
  category: ref(piniaEditProduct.category),
  name: ref(piniaEditProduct.name),
  totalPrice: ref(piniaEditProduct.totalPrice),
  totalInStock: ref(productStore.getTotalPrice)
}

function addName(value) {
  piniaEditProduct.name.value = value
}
function addBatch(value) {
  piniaEditProduct.batch.value = value
}
function addAmount(value) {
  piniaEditProduct.amount.value = Number(value)
}
function addPrice(value) {
  piniaEditProduct.price.value = Number(value)
}
function addWeight(value) {
  piniaEditProduct.weight.value = value
}
function addDate(value) {
  piniaEditProduct.date.value = Number(value)
}
function addimage(value) {
  piniaEditProduct.image.value = value
}

const totalPrice = computed(() => {
  return piniaEditProduct.amount.value * piniaEditProduct.price.value
})

const emit = defineEmits(['closeEdit'])

function closeEdit() {
  emit('closeEdit')
}

function editSave() {
  piniaEditProduct.totalPrice.value = totalPrice.value
  productStore.setEditProduct(props.product.id, piniaEditProduct)
  piniaHistory.totalInStock.value = productStore.getTotalInStock
  historyStore.addToHistory(piniaHistory)
  emit('closeEdit')
}
</script>
<template>
  <div
    class="absolute inset-0 z-20 flex h-fit w-full flex-col rounded-t-3xl bg-surface pt-6"
  >
    <form class="flex flex-col gap-4 px-4">
      <TextField title="Nome" input-type="text" @input-value="addName" />
      <TextField title="Lote" input-type="text" @input-value="addBatch" />
      <TextField
        title="Quantidade"
        input-type="number"
        @input-value="addAmount"
      />
      <TextField title="Preço R$" input-type="number" @input-value="addPrice" />
      <TextField title="Peso" input-type="text" @input-value="addWeight" />
      <TextField
        title="Validade (dias)"
        input-type="number"
        @input-value="addDate"
      />
      <TextField title="Imagem" input-type="file" @input-img="addimage" />
    </form>
    <div class="flex items-end justify-end gap-8 py-6 px-4">
      <p
        class="cursor-pointer font-medium text-tertiary transition-colors duration-200 ease-in-out hover:text-[#425503] active:text-[#354502]"
        @click="closeEdit"
      >
        Cancelar
      </p>
      <p
        class="cursor-pointer font-medium text-tertiary transition-colors duration-200 ease-in-out hover:text-[#425503] active:text-[#354502]"
        @click="editSave"
      >
        Salvar
      </p>
    </div>
  </div>
</template>
