<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import { computed } from 'vue'
import ToolBar from '../../components/ToolBar.vue'
import TheCard from '../../components/TheCard.vue'
import TheFab from '../../components/TheFab.vue'

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
    default: null
  }
})

const productStore = useProductStore()

const piniaData = computed(() => {
  return productStore.unity(props.market, props.category)
})

const hideBar = ref(true)
let lastScrollTop = 0

window.addEventListener(
  'scroll',
  () => {
    var st = window.pageYOffset || document.documentElement.scrollTop

    if (st > lastScrollTop) {
      hideBar.value = false
    } else {
      hideBar.value = true
    }

    lastScrollTop = st <= 0 ? 0 : st
  },
  false
)
</script>

<template>
  <header class="fixed top-0 w-full shadow-sm">
    <ToolBar v-if="hideBar" :user="props.user" :market="props.market" />
  </header>
  <main class="mt-14 mb-24 flex h-full w-full overflow-y-scroll">
    <section class="flex w-full flex-col">
      <div
        class="auto-grid flex flex-col items-center gap-4 px-4 md:grid md:gap-0"
      >
        <TheCard
          v-for="items in piniaData"
          :key="items.id"
          :link="`/${props.user}/${props.market}/details/${props.category}/${items.id}`"
          bg="bg-blue-400"
          :title="`${items.name}, Lote#${items.batch}`"
          :subtitle="`Vence em: ${items.date}`"
        />
      </div>
    </section>
  </main>
  <footer class="fixed bottom-0 flex w-full justify-end p-4">
    <TheFab
      v-if="props.user === 'admin'"
      :market="props.market"
      :category="props.category"
    />
  </footer>
</template>

<style scoped>
.auto-grid {
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  grid-auto-rows: max-content;
}
</style>
