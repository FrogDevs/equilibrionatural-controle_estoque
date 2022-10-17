<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import TextField from './TextField.vue'

const productStore = useProductStore()

const props = defineProps({
  id: {
    type: Number,
    default: null
  },
  category: {
    type: String,
    default: ''
  }
})

const datasForPinia = {
  id: ref(null),
  name: ref(null),
  amount: ref(null),
  price: ref(null),
  weight: ref(null),
  date: ref(null),
  image: ref(null)
}

if (props.category === 'Alimentícios') {
  datasForPinia.id.value = productStore.alimenticios[props.id].id
  datasForPinia.name.value = productStore.alimenticios[props.id].name
  datasForPinia.amount.value = productStore.alimenticios[props.id].amount
  datasForPinia.price.value = productStore.alimenticios[props.id].price
  datasForPinia.weight.value = productStore.alimenticios[props.id].weight
  datasForPinia.date.value = productStore.alimenticios[props.id].date
  datasForPinia.image.value = productStore.alimenticios[props.id].image
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
  if (props.category === 'Alimentícios') {
    productStore.editFromAlimenticios(props.id, datasForPinia)
    emit('closeEdit')
  }
}
</script>
<template>
  <div
    class="absolute inset-0 z-20 my-auto flex h-fit w-full flex-col bg-white px-6 pt-6"
  >
    <form class="flex flex-col gap-4">
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
    <div class="flex items-end justify-end gap-8 py-6">
      <p
        class="font-semibold text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
        @click="closeEdit"
      >
        Cancelar
      </p>
      <p
        class="font-semibold text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
        @click="editSave"
      >
        Salvar
      </p>
    </div>
  </div>
</template>
