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
const spoilInMonth = productStore.getDate(30, 7)
const spoilInWeek = productStore.getDate(7, 0)
const spoiled = productStore.getSpoiled

function goToDetails(user, market, category, id) {
  router.push(`/${user}/${market}/details/${category}/${id}`)
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="mt-16 flex flex-col pb-24">
    <section class="flex flex-col gap-2 px-2">
      <TheDivider subtitle="Vencem nesse mês" />
      <TheList
        v-for="item in spoilInMonth"
        :key="item.id"
        :list-id="item.id"
        :user="item.user"
        :market="item.market"
        :category="item.category"
        :title="item.title"
        @click="goToDetails(item.user, item.market, item.category, item.id)"
      />
    </section>
    <section class="mt-2 flex flex-col gap-2 px-2">
      <TheDivider subtitle="Vencem nessa semana" />
      <TheList
        v-for="item in spoilInWeek"
        :key="item.id"
        :list-id="item.id"
        :user="item.user"
        :market="item.market"
        :category="item.category"
        :title="item.title"
        @click="goToDetails(item.user, item.market, item.category, item.id)"
      />
    </section>
    <section class="mt-2 flex flex-col gap-2 px-2">
      <TheDivider subtitle="Produtos vencidos" />
      <TheList
        v-for="item in spoiled"
        :key="item.id"
        :list-id="item.id"
        :user="item.user"
        :market="item.market"
        :category="item.category"
        :title="item.title"
        @click="goToDetails(item.user, item.market, item.category, item.id)"
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
