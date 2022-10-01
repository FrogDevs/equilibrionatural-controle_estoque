<!-- eslint-disable vue/multi-word-component-names -->
<!-- escolher lojas -->
<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex h-full flex-col items-center p-6">
    <h1 class="text-xl">Selecione a unidade</h1>
    <div
      class="flex flex-col pb-6 md:h-full md:flex-row md:items-center md:gap-6"
    >
      <TheCard />
      <TheCard />
    </div>
  </main>
</template>
