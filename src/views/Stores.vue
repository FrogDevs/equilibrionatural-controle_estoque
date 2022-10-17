<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TheCard from '../components/TheCard.vue'
</script>

<template>
  <main class="flex h-full flex-col items-center p-6">
    <div
      class="flex w-full flex-col items-center justify-center pb-6 sm:h-full md:items-center md:gap-6"
    >
      <h1 class="text-xl text-amber-800">Selecione a unidade</h1>
      <div
        class="flex w-full flex-col items-center justify-center md:flex-row md:gap-6"
      >
        <TheCard
          link="/home"
          bg="bg-store1 bg-cover bg-center bg-no-repeat"
          title="Unidade 1"
          subtitle="Rua imberé, 373"
        />
        <TheCard
          link="/home"
          bg="bg-store2 bg-cover bg-center bg-no-repeat"
          title="Unidade 2"
          subtitle="Av. Taquandava, 1203"
        />
      </div>
    </div>
  </main>
</template>
