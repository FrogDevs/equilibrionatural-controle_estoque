<script setup>
import { ref } from 'vue'
import router from '../router'
import { useProductStore } from '../stores/ProductStore'
import TextField from './TextField.vue'
import TheList from './TheList.vue'

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
const searchItems = ref([])
const emit = defineEmits(['close-modal'])

function closeModal() {
  emit('close-modal')
}

function search(value) {
  if (value) {
    productStore.products.forEach((e) => {
      let name = e.name
      const regex = new RegExp(value, 'ig')
      let testName = regex.test(name)

      if (testName) {
        searchItems.value.push({
          id: e.id,
          name: e.name,
          category: e.category
        })
      }
    })
  } else {
    searchItems.value = []
  }
}

function goToProduct(category, id) {
  router.push(`/${props.user}/${props.market}/details/${category}/${id}`)
}
</script>
<template>
  <div
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 bg-opacity-20 p-6"
  >
    <div
      class="flex h-full w-full flex-col items-end rounded-[1.75rem] border-neutral-100 bg-white shadow-lg md:max-h-96 md:max-w-2xl"
    >
      <div
        class="flex w-full items-center gap-2 rounded-t-[1.75rem] border-b px-6 py-3"
      >
        <TextField
          title="Pesquise um produto"
          type="search"
          @input-value="search"
        />
        <i
          class="material-symbols-rounded rounded-full bg-opacity-80 p-2 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
          @click="closeModal"
        >
          close
        </i>
      </div>
      <div
        class="flex h-full w-full flex-col gap-2 overflow-y-auto rounded-b-[1.75rem] bg-neutral-50 px-6 py-4"
      >
        <TheList
          v-for="item in searchItems"
          :key="item.id"
          :title="item.name"
          @click="goToProduct(item.category, item.id)"
        />
      </div>
    </div>
  </div>
</template>
