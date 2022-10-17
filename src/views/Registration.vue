<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/ProductStore'
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheDropdown from '../components/TheDropdown.vue'
import TheSnackBar from '../components/TheSnackBar.vue'

const category = ref(null)
const productStore = useProductStore()
const itemSaved = ref(false)

const datasForPinia = {
  id: ref(null),
  name: ref(null),
  amount: ref(null),
  price: ref(null),
  weight: ref(null),
  date: ref(null),
  image: ref(null)
}

function addName(value) {
  datasForPinia.name.value = value
}
function addAmount(value) {
  datasForPinia.amount.value = value
}
function addCategory(value) {
  category.value = value
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
function hideSnackBar() {
  itemSaved.value = false
}

// clear data após enviar
function addItem() {
  if (category.value === 'alimenticios') {
    datasForPinia.id.value = productStore.alimenticios.length
    productStore.addToAlimenticios(datasForPinia)
    itemSaved.value = true
    setTimeout(hideSnackBar, 3000)
  } else {
    return
  }
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="flex w-full flex-col pb-[6.5rem] pt-20">
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
      <TheDropdown @input-value="addCategory" />
      <TextField title="Preço" input-type="number" @input-value="addPrice" />
      <TextField title="Peso" input-type="text" @input-value="addWeight" />
      <TextField title="Validade" input-type="date" @input-value="addDate" />
      <TextField title="Imagem" input-type="file" @input-value="addimage" />
      <TheButton title="Salvar" />
    </form>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :registration="true" />
  </footer>
  <TheSnackBar v-if="itemSaved" v-auto-animate />
</template>
