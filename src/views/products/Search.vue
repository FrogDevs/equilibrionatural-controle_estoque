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
  <header class="fixed top-0 w-full shadow-sm">
    <ToolBar />
  </header>
  <main class="my-6 mt-20 flex w-full flex-col gap-6 overflow-y-scroll">
    <section class="flex flex-col">
      <h1 class="ml-6 text-4xl font-extrabold text-neutral-800">A</h1>
      <div
        class="auto-grid flex flex-col items-center gap-6 px-6 pt-3 md:grid md:gap-0"
      >
        <TheCard
          link="/"
          bg="bg-blue-400"
          title="Produto"
          subtitle="Quantidade: 20"
        />
      </div>
    </section>
  </main>
</template>

<style>
.auto-grid {
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  grid-auto-rows: max-content;
}
</style>
