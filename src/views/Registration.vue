<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheSnackBar from '../components/TheSnackBar.vue'
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

const category = ref(null)
const productStore = useProductStore()
const itemSaved = ref(false)

const name = ref(null)
const amount = ref(null)
const price = ref(null)
const weight = ref(null)
const date = ref(null)
const image = ref(null)

function addName(value) {
  name.value = value
}
function addAmount(value) {
  amount.value = value
}
function addPrice(value) {
  price.value = value
}
function addWeight(value) {
  weight.value = value
}
function addDate(value) {
  date.value = value
}
function addimage(value) {
  image.value = value
}
function hideSnackBar() {
  itemSaved.value = false
}

// function clearItens() {
//   // category.value = null
//   name.value = null
//   amount.value = null
//   price.value = null
//   weight.value = null
//   date.value = null
//   image.value = null
// }

function addItem() {
  if (category.value === 'alimenticios') {
    productStore.addToAlimenticios({
      id: productStore.alimenticios.length,
      name: name.value,
      amount: amount.value,
      price: price.value,
      weight: weight.value,
      date: date.value,
      image: image.value
    })
    itemSaved.value = true
    setTimeout(hideSnackBar, 3000)
    // clearItens()
  } else {
    return
  }
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar :market="props.market" />
  </header>
  <main class="flex w-full flex-col pb-[6.5rem] pt-[4rem]">
    <TheDivider subtitle="Cadastrar produtos" />
    <form
      class="flex flex-col items-center gap-4 px-4"
      @submit.prevent="addItem"
    >
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
      <TheButton title="Salvar" />
    </form>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :registration="true" :market="props.market" />
  </footer>
  <TheSnackBar v-if="itemSaved" v-auto-animate />
</template>
