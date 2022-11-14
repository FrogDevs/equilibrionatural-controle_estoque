<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '../../router'
import { computed, ref } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import { useHistoryStore } from '../../stores/HistoryStore'
import { useUserStore } from '../../stores/UserStore'
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
const userAuth = useUserStore()

const piniaData = computed(() => {
  const product = productStore.getId(props.id)
  return product[0]
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
  id: ref(props.id),
  date: historyDate(),
  state: 'Excluido',
  market: ref(props.market),
  batch: ref(piniaData.value.batch),
  category: ref(props.category),
  name: ref(piniaData.value.name),
  totalPrice: ref(piniaData.value.totalPrice),
  totalInStock: ref(null)
}

const editModal = ref(false)

function activeEdit() {
  editModal.value = true
}

const showDialogue = ref(false)

function activeDialogue() {
  showDialogue.value = !showDialogue.value
}

function deleteProduct() {
  productStore.setDeleteProduct(props.id)
  piniaHistory.totalInStock.value = productStore.getTotalInStock
  historyStore.addToHistory(piniaHistory)
  router.go(-1)
}

const validity = computed(() => {
  if (piniaData.value.date > 0) {
    return `Validade: ${piniaData.value.date} dias`
  } else if (piniaData.value.date === 0) {
    return 'Produto vencido'
  } else {
    return null
  }
})

const validityProduct = ref(validity)
</script>
<template>
  <main class="flex h-screen flex-col items-center">
    <div class="flex h-3/5 w-full flex-col">
      <i
        class="material-symbols-rounded absolute top-0 z-10 m-2 max-w-fit cursor-pointer rounded-full p-2 text-onBackground transition-colors duration-200 ease-in-out hover:bg-secondaryContainer hover:text-onSecondaryContainer active:bg-[#ffd0b6]"
        @click="close"
      >
        close
      </i>
      <div
        class="h-full w-full bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + piniaData.image + ')' }"
      ></div>
    </div>
    <section
      class="absolute bottom-0 z-10 flex h-2/4 w-full flex-col gap-4 rounded-t-3xl bg-surface p-4"
    >
      <EditModal
        v-if="editModal"
        :key="props.id"
        :product="piniaData"
        :market="props.market"
        :category="props.category"
        @close-edit="editModal = false"
      />
      <TheDialogue
        v-if="showDialogue"
        :key="props.id"
        title="Deseja excluir este produto?"
        subtitle="Saiba que não será possível recuperar quaisquer dados perdidos."
        first-action="Excluir"
        second-action="Cancelar"
        @second-action="showDialogue = false"
        @first-action="deleteProduct"
      />
      <h1 class="text-2xl text-onSurface">
        {{ piniaData.name }}, #{{ piniaData.batch }}
      </h1>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <p class="font-medium text-onBackground">
            Peso: {{ piniaData.weight }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-onBackground">
            Quantidade: {{ piniaData.amount }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-onBackground">
            Preço por produto: R${{ piniaData.price }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-onBackground">
            Preço total: R${{ piniaData.totalPrice }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-onBackground">
            {{ validityProduct }}
          </p>
        </div>
      </div>
      <div class="flex h-full w-full items-end justify-center gap-4 pt-2 pb-4">
        <TheButton
          v-if="userAuth.getUser === 'admin'"
          title="Editar"
          @click="activeEdit"
        />
        <TheButton
          v-if="userAuth.getUser === 'admin'"
          title="Excluir"
          @click="activeDialogue"
        />
      </div>
    </section>
  </main>
</template>
