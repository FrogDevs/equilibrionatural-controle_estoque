<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, ref } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import EditModal from '../../components/EditModal.vue'
import TheButton from '../../components/TheButton.vue'
import TheDivider from '../../components/TheDivider.vue'
import TheDialogue from '../../components/TheDialogue.vue'
import router from '../../router'

function back() {
  router.go(-1)
}

const props = defineProps({
  category: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
})

const productStore = useProductStore()

const piniaData = computed(() => {
  if (props.category === 'Alimentícios') {
    return productStore.alimenticios[props.id]
  } else {
    return null
  }
})

const editModal = ref(false)
const showDialogue = ref(false)

function activeEdit() {
  editModal.value = true
}

function activeDialogue() {
  showDialogue.value = !showDialogue.value
}
</script>
<template>
  <main class="flex flex-col items-center pb-5">
    <div class="relative flex h-48 w-full flex-col">
      <i
        class="material-symbols-rounded z-10 m-2 max-w-fit rounded-full p-2 text-neutral-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 active:bg-neutral-100 active:bg-opacity-10"
        @click="back"
      >
        close
      </i>
      <div class="absolute h-full w-full bg-blue-400"></div>
    </div>
    <section class="relative flex w-full flex-col gap-5 p-5">
      <EditModal
        v-if="editModal"
        :id="Number(props.id)"
        :key="0"
        :category="props.category"
        @close-edit="editModal = false"
      />
      <TheDialogue
        v-if="showDialogue"
        :id="Number(props.id)"
        :key="0"
        :category="props.category"
        @cancel-delete="showDialogue = false"
      />
      <h1 class="text-2xl text-amber-800">
        {{ piniaData.name }}
      </h1>
      <TheDivider />
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-col gap-1">
          <p class="font-medium text-neutral-800">Quantidade:</p>
          <p class="font-medium text-neutral-800">{{ piniaData.amount }}</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-neutral-800">Peso:</p>
          <p class="font-medium text-neutral-800">{{ piniaData.weight }}</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-neutral-800">Validade:</p>
          <p class="font-medium text-neutral-800">{{ piniaData.date }}</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-medium text-neutral-800">Preço:</p>
          <p class="font-medium text-neutral-800">{{ piniaData.price }}</p>
        </div>
      </div>
    </section>
    <div class="my-2 flex gap-2">
      <TheButton title="Editar" @click="activeEdit" />
      <TheButton title="Excluir" @click="activeDialogue" />
    </div>
  </main>
</template>
