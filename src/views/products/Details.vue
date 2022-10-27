<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../../router'
import { computed, ref } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import { useHistoryStore } from '../../stores/HistoryStore'
import EditModal from '../../components/EditModal.vue'
import TheButton from '../../components/TheButton.vue'
import TheDialogue from '../../components/TheDialogue.vue'

const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
})

function close() {
  router.go(-1)
}

const productStore = useProductStore()
const historyStore = useHistoryStore()

const piniaData = computed(() => {
  return productStore.products[props.id]
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

const totalPrice = computed(() => {
  return piniaData.value.amount * piniaData.value.price
})

const piniaHistory = {
  id: ref(props.id),
  date: historyDate(),
  state: 'Excluido',
  market: ref(props.market),
  batch: ref(piniaData.value.batch),
  category: ref(props.category),
  name: ref(piniaData.value.name),
  totalPrice: totalPrice
}

const editModal = ref(false)
const showDialogue = ref(false)

function activeEdit() {
  editModal.value = true
}

function activeDialogue() {
  showDialogue.value = !showDialogue.value
}

function deleteProduct() {
  productStore.deleteProduct(props.productId)
  historyStore.addToHistory(piniaHistory)
  router.go(-1)
}
</script>
<template>
  <header>
    <div class="relative flex h-60 w-full flex-col">
      <i
        class="material-symbols-rounded absolute z-10 m-4 max-w-fit rounded-full p-2 text-neutral-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 active:bg-neutral-100 active:bg-opacity-10"
        @click="close"
      >
        close
      </i>
      <div class="h-full w-full bg-blue-400"></div>
    </div>
  </header>
  <main class="flex flex-col items-center pb-5">
    <section class="relative flex w-full flex-col gap-4 p-4">
      <EditModal
        v-if="editModal"
        :key="props.id"
        :product-id="Number(props.id)"
        :market="props.market"
        :category="props.category"
        @close-edit="editModal = false"
      />
      <TheDialogue
        v-if="showDialogue"
        :key="props.id"
        title="Deseja excluir este item?"
        message="Saiba que não será possível recuperar quaisquer dados."
        button-one-title="Cancelar"
        button-two-title="Excluir"
        :product-id="Number(props.id)"
        :category="props.category"
        @close-dialogue="showDialogue = false"
        @primary-action="deleteProduct"
      />
      <h1 class="text-2xl text-green-800">
        {{ piniaData.name }}, Lote#{{ piniaData.batch }}
      </h1>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <p class="font-medium text-amber-800">
            Quantidade: {{ piniaData.amount }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-amber-800">Peso: {{ piniaData.weight }}</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-amber-800">
            Validade: {{ piniaData.date }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-amber-800">
            Preço por produto: R${{ piniaData.price }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-amber-800">
            Preço total: R${{ piniaData.totalPrice }}
          </p>
        </div>
      </div>
    </section>
  </main>
  <footer class="absolute bottom-0 mb-4 flex w-full justify-center gap-4">
    <TheButton
      v-if="props.user === 'admin'"
      title="Editar"
      @click="activeEdit"
    />
    <TheButton
      v-if="props.user === 'admin'"
      title="Excluir"
      @click="activeDialogue"
    />
  </footer>
</template>
