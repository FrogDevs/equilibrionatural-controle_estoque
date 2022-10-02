<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheList from '../components/TheList.vue'
import TheDivider from '../components/TheDivider.vue'
</script>
<template>
  <!-- v-for -->
  <!-- <router-link :to="{ name: 'Details', params: { id: 2 } }">
    <p>Detalhes</p>
  </router-link> -->
  <header>
    <ToolBar />
  </header>
  <main>
    <TheDivider subtitle="Categorias" />
    <section class="flex flex-col gap-2 px-2">
      <TheList title="Alimentícios" />
      <TheList title="Beleza" />
      <TheList title="Óleos essenciais" />
      <TheList title="Suplementos" />
      <TheList title="Vida & Saúde" />
    </section>
    <TheDivider />
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar home="true" />
  </footer>
</template>
