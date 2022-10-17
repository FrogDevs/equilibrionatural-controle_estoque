<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useProductStore } from '../../stores/ProductStore'
import { computed } from 'vue'
import ToolBar from '../../components/ToolBar.vue'
import TheCard from '../../components/TheCard.vue'

const props = defineProps({
  category: {
    type: String,
    default: null
  }
})

const productStore = useProductStore()

const piniaData = computed(() => {
  if (props.category === 'Alimentícios') {
    return productStore.alimenticios
  } else {
    return null
  }
})
</script>

<template>
  <header class="fixed top-0 w-full shadow-sm">
    <ToolBar />
  </header>
  <main class="flex w-full flex-col gap-4 overflow-y-scroll">
    <section class="flex flex-col">
      <div
        class="auto-grid flex flex-col items-center gap-4 px-4 pt-[4rem] md:grid md:gap-0"
      >
        <TheCard
          v-for="items in piniaData"
          :key="items.id"
          :link="`/details/${props.category}/${items.id}`"
          bg="bg-blue-400"
          :title="items.name"
          :subtitle="`${items.amount} item(s) em estoque`"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.auto-grid {
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  grid-auto-rows: max-content;
}
</style>
