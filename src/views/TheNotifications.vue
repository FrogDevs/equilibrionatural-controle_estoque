<script setup>
import router from '../router'
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheDivider from '../components/TheDivider.vue'
import TheList from '../components/TheList.vue'
import { useProductStore } from '../stores/ProductStore'

const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  }
})

const productStore = useProductStore()
productStore.setDaysToSpoil()

const spoilInMonth = productStore.getDate(30, 7)
const spoilInWeek = productStore.getDate(7, 0)
const spoiled = productStore.getSpoiled

function goToDetails(category, id) {
  router.push(`/${props.user}/${props.market}/details/${category}/${id}`)
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="mt-16 flex flex-col pb-24">
    <TheDivider subtitle="Vencem neste mês" />
    <section class="flex flex-col gap-2 px-2">
      <TheList
        v-for="item in spoilInMonth"
        :key="item.id"
        :list-id="item.id"
        :user="item.user"
        :category="item.category"
        :title="item.name"
        @click="goToDetails(item.category, item.id)"
      />
    </section>
    <TheDivider subtitle="Vencem nesta semana" />
    <section class="mt-2 flex flex-col gap-2 px-2">
      <TheList
        v-for="item in spoilInWeek"
        :key="item.id"
        :list-id="item.id"
        :user="item.user"
        :category="item.category"
        :title="item.name"
        @click="goToDetails(item.category, item.id)"
      />
    </section>
    <TheDivider subtitle="Produtos vencidos" />
    <section class="mt-2 flex flex-col gap-2 px-2">
      <TheList
        v-for="item in spoiled"
        :key="item.id"
        :list-id="item.id"
        :user="item.user"
        :category="item.category"
        :title="item.name"
        @click="goToDetails(item.category, item.id)"
      />
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar
      :notifications="true"
      :user="props.user"
      :market="props.market"
    />
  </footer>
</template>
