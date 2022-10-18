<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import router from '../router'
import { useProductStore } from '../stores/ProductStore'
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

const productStore = useProductStore()
const itemSaved = ref(false)

const piniaDatas = {
  market: props.market,
  name: ref(null),
  amount: ref(null),
  price: ref(null),
  weight: ref(null),
  date: ref(null),
  image: ref(null)
}

function addName(value) {
  piniaDatas.name.value = value
}
function addAmount(value) {
  piniaDatas.amount.value = value
}
function addPrice(value) {
  piniaDatas.price.value = value
}
function addWeight(value) {
  piniaDatas.weight.value = value
}
function addDate(value) {
  piniaDatas.date.value = value
}
function addimage(value) {
  piniaDatas.image.value = value
}
function hideSnackBar() {
  itemSaved.value = false
}

function addItem() {
  productStore.addProduct(piniaDatas, props.category)
  itemSaved.value = true
  setTimeout(hideSnackBar, 3000)
  router.go(-1)
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar :market="props.market" />
  </header>
  <main class="flex w-full flex-col pb-2 pt-[4rem]">
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
  <TheSnackBar v-if="itemSaved" v-auto-animate />
</template>
