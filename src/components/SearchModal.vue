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
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-scrim bg-opacity-25 p-6"
  >
    <div
      class="elevation-3 flex h-fit w-full flex-col items-end rounded-[1.75rem] border-outline bg-surface md:max-h-96 md:max-w-2xl"
    >
      <div
        class="flex w-full items-center gap-2 rounded-t-[1.75rem] border-b px-6 py-4"
      >
        <TextField
          title="Pesquise um produto"
          type="search"
          @input-value="search"
        />
        <i
          class="material-symbols-rounded cursor-pointer rounded-full p-2 text-onBackground transition-colors duration-200 ease-in-out hover:bg-secondaryContainer hover:text-onSecondaryContainer active:bg-opacity-70"
          @click="closeModal"
        >
          close
        </i>
      </div>
      <div
        class="flex h-[20rem] w-full flex-col gap-2 overflow-y-auto rounded-b-[1.75rem] bg-surface px-4 py-4"
      >
        <TheList
          v-for="item in searchItems"
          :key="item.id"
          :list-id="item.id"
          :title="item.name"
          @click="goToProduct(item.category, item.id)"
        />
      </div>
    </div>
  </div>
</template>
