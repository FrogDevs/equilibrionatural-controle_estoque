<script setup>
import { computed } from 'vue'
import { useHistoryStore } from '../../stores/HistoryStore'
import ToolBar from '../../components/ToolBar.vue'
import NavigationBar from '../../components/NavigationBar.vue'

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
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="mt-16 pb-24">
    <section class="relative mx-4 overflow-x-auto pt-4">
      <table class="w-full table-auto text-left text-sm">
        <thead class="bg-tertiaryContainer text-xs uppercase">
          <tr>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">
              Modificado em
            </th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">Ação</th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">
              Unidade
            </th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">Lote</th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">
              Categoria
            </th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">Nome</th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">
              Preço total
            </th>
            <th scope="col" class="py-3 px-6 text-onTertiaryContainer">
              Total em estoque
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in piniaData"
            :key="item.id"
            class="border-b border-outline bg-surface transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-surfaceVariant active:bg-opacity-70"
          >
            <td
              scope="row"
              class="whitespace-nowrap py-4 px-6 font-medium text-onBackground"
            >
              {{ item.date }}
            </td>
            <td class="py-4 px-6 text-onBackground">{{ item.state }}</td>
            <td class="py-4 px-6 text-onBackground">
              {{ item.market }}
            </td>
            <td class="py-4 px-6 text-onBackground">#{{ item.batch }}</td>
            <td class="py-4 px-6 text-onBackground">
              {{ item.category }}
            </td>
            <td class="py-4 px-6 text-onBackground">{{ item.name }}</td>
            <td class="py-4 px-6 text-onBackground">
              R$ {{ item.totalPrice }}
            </td>
            <td class="py-4 px-6 text-onBackground">
              R$ {{ item.totalInStock }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :history="true" :user="props.user" :market="props.market" />
  </footer>
</template>
