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

const product = useProductStore()

const postsOrder = computed(() => {
  if (props.category === 'Alimentícios') {
    return product.alimenticios
  } else {
    return null
  }
})
</script>

<template>
  <header class="fixed top-0 w-full shadow-sm">
    <ToolBar />
  </header>
  <main class="my-6 mt-20 flex w-full flex-col gap-6 overflow-y-scroll">
    <section class="flex flex-col">
      <div
        class="auto-grid flex flex-col items-center gap-6 px-6 pt-3 md:grid md:gap-0"
      >
        <TheCard
          v-for="items in postsOrder"
          :key="items.id"
          :link="`/details/${items.id}`"
          bg="bg-blue-400"
          :title="items.name"
          :subtitle="`Quantidade: ${items.amount}`"
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
