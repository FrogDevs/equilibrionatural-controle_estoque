<!-- eslint-disable vue/multi-word-component-names -->
<!-- escolher lojas -->
<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex flex-col items-center h-full p-6">
    <h1 class="text-xl">Selecione a unidade</h1>
    <div
      class="flex flex-col pb-6 md:flex-row md:h-full md:gap-6 md:items-center"
    >
      <TheCard />
      <TheCard />
    </div>
  </main>
</template>
