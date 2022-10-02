<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex h-full flex-col items-center p-6">
    <h1 class="text-xl">Selecione a unidade</h1>
    <div
      class="flex flex-col pb-6 md:h-full md:flex-row md:items-center md:gap-6"
    >
      <TheCard
        link="/home"
        bg="bg-store1 bg-cover bg-center bg-no-repeat"
        title="Rua imberé, 373"
        subtitle="Unidade 1"
      />
      <TheCard
        link="/home"
        bg="bg-store2 bg-cover bg-center bg-no-repeat"
        title="Av. Taquandava, 1203"
        subtitle="Unidade 2"
      />
    </div>
  </main>
</template>
