<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import { useUserStore } from '../../stores/UserStore'
import ToolBar from '../../components/ToolBar.vue'
import TheFab from '../../components/TheFab.vue'

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
const userAuth = useUserStore()

const piniaData = computed(() =>
  productStore.getUnity(props.market, props.category).slice(0).reverse()
)

const itemSubtitle = (item) => {
  if (item > 0) {
    return `Vence em ${item} dias.`
  } else if (item === 0) {
    return 'Produto vencido.'
  } else {
    return null
  }
}
</script>

<template>
  <header class="fixed top-0 w-full shadow-sm">
    <ToolBar :user="props.user" :market="props.market" />
  </header>
  <main class="mt-20 flex h-full w-full flex-col overflow-y-scroll pb-24">
    <div
      class="auto-grid flex flex-col items-center justify-center gap-4 px-4 md:grid"
    >
      <Suspense>
        <template #default>
          <AsyncCard
            v-for="item in piniaData"
            :key="item.id"
            :link="`/${props.user}/${props.market}/details/${props.category}/${item.id}`"
            :bg="item.image"
            :title="`${item.name}, #${item.batch}`"
            :subtitle="itemSubtitle(item.date)"
          />
        </template>
        <template #fallback>
          <p>Carregando...</p>
        </template>
      </Suspense>
      <p v-if="!piniaData.length" class="text-amber-800">
        Sem itens registrados.
      </p>
    </div>
  </main>
  <footer class="fixed bottom-0 flex w-full justify-end p-4">
    <TheFab
      v-if="userAuth.getUser === 'admin'"
      :market="props.market"
      :category="props.category"
    />
  </footer>
</template>

<style scoped>
.auto-grid {
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: max-content;
}
</style>
