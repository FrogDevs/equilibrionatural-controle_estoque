<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import TheDivider from './TheDivider.vue'
import TextField from './TextField.vue'

const productStore = useProductStore()

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

const datasForPinia = {
  id: ref(productStore.products[props.id].id),
  market: ref(productStore.products[props.id].market),
  category: ref(productStore.products[props.id].category),
  name: ref(productStore.products[props.id].name),
  amount: ref(productStore.products[props.id].amount),
  price: ref(productStore.products[props.id].price),
  weight: ref(productStore.products[props.id].weight),
  date: ref(productStore.products[props.id].date),
  image: ref(productStore.products[props.id].image)
}

function addName(value) {
  datasForPinia.name.value = value
}
function addAmount(value) {
  datasForPinia.amount.value = value
}
function addPrice(value) {
  datasForPinia.price.value = value
}
function addWeight(value) {
  datasForPinia.weight.value = value
}
function addDate(value) {
  datasForPinia.date.value = value
}
function addimage(value) {
  datasForPinia.image.value = value
}

const emit = defineEmits(['closeEdit'])

function closeEdit() {
  emit('closeEdit')
}

function editSave() {
  productStore.editFromAlimenticios(props.id, datasForPinia)
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
      <TextField title="Preço" input-type="number" @input-value="addPrice" />
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
