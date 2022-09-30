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
    <TheDivider />
    <section class="flex flex-col px-2 gap-2">
      <TheList />
      <!-- <div class="flex py-3.5 px-4 gap-2 shadow-sm rounded-xl">
        <p class="font-medium">Beleza</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2 shadow-sm rounded-xl">
        <p class="font-medium">Óleos essenciais</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2 shadow-sm rounded-xl">
        <p class="font-medium">Suplementos</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2 shadow-sm rounded-xl">
        <p class="font-medium">Vida & Saúde</p>
      </div> -->
    </section>
    <TheDivider />
  </main>
  <footer class="fixed w-full bottom-0">
    <NavigationBar />
  </footer>
</template>
