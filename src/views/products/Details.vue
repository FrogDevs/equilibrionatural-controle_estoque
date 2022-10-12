<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TheButton from '../../components/TheButton.vue'
import TheDivider from '../../components/TheDivider.vue'
import router from '../../router'

function back() {
  router.go(-1)
}

// const props = defineProps({
//   name: {
//     type: String,
//     default: ''
//   },
//   amount: {
//     type: Number,
//     default: 0
//   },
//   category: {
//     type: String,
//     default: null
//   },
//   price: {
//     type: String,
//     default: 'R$00,00'
//   },
//   weight: {
//     type: String,
//     default: ''
//   },
//   date: {
//     type: String,
//     default: ''
//   }
// })
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
    <section class="flex w-full flex-col gap-5 p-5">
      <h1 class="text-2xl text-neutral-800">props.name</h1>
      <TheDivider />
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Quantidade:</p>
          <p class="text-sm font-medium text-neutral-800">props.amount</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Peso:</p>
          <p class="text-sm font-medium text-neutral-800">props.price</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Validade:</p>
          <p class="text-sm font-medium text-neutral-800">props.weight</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Preço:</p>
          <p class="text-sm font-medium text-neutral-800">props.date</p>
        </div>
      </div>
    </section>
    <div class="my-2 flex gap-2">
      <TheButton title="Editar" />
      <TheButton title="Excluir" />
    </div>
  </main>
</template>
