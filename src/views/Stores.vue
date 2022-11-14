<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useProductStore } from '../stores/ProductStore'
import { useHistoryStore } from '../stores/HistoryStore'
import TheCard from '../components/TheCard.vue'

const props = defineProps({
  user: {
    type: String,
    default: ''
  }
})

const productStore = useProductStore()
const historyStore = useHistoryStore()
productStore.getProducts()
historyStore.getHistory()
</script>

<template>
  <main class="flex h-screen justify-center lg:items-center">
    <div
      class="flex h-fit w-fit flex-col items-center justify-center py-6 sm:h-full md:gap-6"
    >
      <h1 class="text-xl text-onBackground">Selecione uma unidade</h1>
      <p
        v-if="productStore.loading || productStore.loading"
        class="text-tertiary"
      >
        Carregando produtos...
      </p>
      <div
        v-else
        class="flex w-full flex-col items-center justify-center gap-6 pt-6 md:flex-row"
      >
        <TheCard
          :link="`/${props.user}/unidade1/home`"
          bg="/store1.avif"
          title="Unidade 1"
          subtitle="Rua Imberé, 373"
        />
        <TheCard
          :link="`/${props.user}/unidade2/home`"
          bg="/store2.avif"
          title="Unidade 2"
          subtitle="Av. Taquandava, 1203"
        />
      </div>
    </div>
  </main>
</template>
