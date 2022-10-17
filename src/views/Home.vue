<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheList from '../components/TheList.vue'
import TheDivider from '../components/TheDivider.vue'

const props = defineProps({
  market: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <header>
    <ToolBar :market="props.market" />
  </header>
  <main>
    <TheDivider subtitle="Categorias" />
    <section class="flex flex-col gap-2 px-2">
      <TheList title="Alimentícios" :market="props.market" />
      <TheList title="Beleza" :market="props.market" />
      <TheList title="Óleos essenciais" :market="props.market" />
      <TheList title="Suplementos" :market="props.market" />
      <TheList title="Vida & Saúde" :market="props.market" />
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :home="true" :market="props.market" />
  </footer>
</template>
