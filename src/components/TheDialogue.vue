<script setup>
import router from '../router'
import { useProductStore } from '../stores/ProductStore'

const productStore = useProductStore()
const emit = defineEmits(['cancelDelete', 'deleteProduct'])

const props = defineProps({
  id: {
    type: Number,
    default: null
  },
  category: {
    type: String,
    default: ''
  }
})

function cancelDelete() {
  emit('cancelDelete')
}

function deleteProduct() {
  if (props.category === 'Alimentícios') {
    productStore.deleteFromAlimenticios(props.id)
    router.go(-1)
  }
}
</script>
<template>
  <div
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 bg-opacity-20 p-6"
  >
    <div class="flex h-fit flex-col rounded-[1.75rem] bg-green-50 shadow-lg">
      <div class="flex w-full flex-col gap-4 px-6 pt-6">
        <h2 class="text-2xl text-neutral-800">Deseja excluir este item?</h2>
        <p class="">Saiba que não será possível recuperar quaisquer dados.</p>
      </div>
      <div class="flex w-full justify-end gap-8 py-6 px-9">
        <p
          class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
          @click="cancelDelete"
        >
          Cancelar
        </p>
        <p
          class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
          @click="deleteProduct"
        >
          Excluir
        </p>
      </div>
    </div>
  </div>
</template>
