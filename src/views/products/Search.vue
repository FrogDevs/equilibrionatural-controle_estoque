<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import ToolBar from '../../components/ToolBar.vue'
import TheFab from '../../components/TheFab.vue'
import TheDivider from '../../components/TheDivider.vue'

const AsyncCard = defineAsyncComponent(() =>
  import('../../components/TheCard.vue')
)

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
  return productStore.getUnity(props.market, props.category).slice(0).reverse()
})

const dividerTitle = computed(() => {
  if (props.category === 'alimenticios') {
    return 'Alimentícios'
  } else if (props.category === 'beleza') {
    return 'Beleza'
  } else if (props.category === 'oleos') {
    return 'Óleos essenciais'
  } else if (props.category === 'suplementos') {
    return 'Suplementos'
  } else if (props.category === 'vida') {
    return 'Vida & Saúde'
  } else {
    return null
  }
})
</script>

<template>
  <header class="fixed top-0 w-full shadow-sm">
    <ToolBar :user="props.user" :market="props.market" />
  </header>
  <main class="mt-16 flex h-full w-full flex-col overflow-y-scroll pb-24">
    <TheDivider :subtitle="dividerTitle" />
    <div
      class="auto-grid flex flex-col items-center gap-4 px-4 md:grid md:gap-0"
    >
      <Suspense>
        <template #default>
          <AsyncCard
            v-for="items in piniaData"
            :key="items.id"
            :link="`/${props.user}/${props.market}/details/${props.category}/${items.id}`"
            :bg="items.image"
            :title="`${items.name}, #${items.batch}`"
            :subtitle="`Vence em: ${items.date}`"
          />
        </template>
        <template #fallback>
          <p>Carregando...</p>
        </template>
      </Suspense>
    </div>
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
