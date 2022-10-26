<script setup>
import { computed } from 'vue'
import router from '../../router'
import { useHistoryStore } from '../../stores/HistoryStore'
import ToolBar from '../../components/ToolBar.vue'
import NavigationBar from '../../components/NavigationBar.vue'
import TheDivider from '../../components/TheDivider.vue'

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

const historyStore = useHistoryStore()

const piniaData = computed(() => {
  return historyStore.history.slice(0).reverse()
})

function linkDetails(category, id) {
  router.push(`/${props.user}/${props.market}/details/${category}/${id}`)
}
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="mt-16 pb-24">
    <TheDivider subtitle="Últimas mudanças" />
    <section class="relative mx-2 overflow-x-auto">
      <table class="w-full table-auto text-left text-sm text-green-900">
        <thead class="bg-amber-50 text-xs uppercase text-amber-800">
          <tr>
            <th scope="col" class="py-3 px-6">Modificado em</th>
            <th scope="col" class="py-3 px-6">Estado</th>
            <th scope="col" class="py-3 px-6">Unidade</th>
            <th scope="col" class="py-3 px-6">Lote</th>
            <th scope="col" class="py-3 px-6">Categoria</th>
            <th scope="col" class="py-3 px-6">Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in piniaData"
            :key="item.id"
            class="border-b bg-white transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 active:bg-neutral-200"
            @click="linkDetails(item.category, item.id)"
          >
            <td scope="row" class="whitespace-nowrap py-4 px-6 font-medium">
              {{ item.date }}
            </td>
            <td class="py-4 px-6">{{ item.state }}</td>
            <td class="py-4 px-6">{{ item.market }}</td>
            <td class="py-4 px-6">#{{ item.batch }}</td>
            <td class="py-4 px-6">{{ item.category }}</td>
            <td class="py-4 px-6">{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :history="true" :user="props.user" :market="props.market" />
  </footer>
</template>
