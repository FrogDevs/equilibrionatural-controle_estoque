<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ToolBar from '../../components/ToolBar.vue'
import TheCard from '../../components/TheCard.vue'
// Ver detalhes e editar
// const props = defineProps({
//   id: {
//     type: Number,
//     default: 0
//   }
// })
</script>

<template>
  <!-- <p>O id é {{ props.id }}</p> -->
  <header class="fixed w-full top-0 shadow-sm">
    <ToolBar />
  </header>
  <main class="flex flex-col w-full overflow-y-scroll mt-20 my-6 gap-6">
    <section class="flex flex-col">
      <h1 class="font-extrabold text-4xl ml-6">A</h1>
      <div
        class="flex flex-col items-center pt-3 px-6 gap-6 md:grid md:gap-0 auto-grid"
      >
        <TheCard />
      </div>
    </section>
  </main>
</template>
