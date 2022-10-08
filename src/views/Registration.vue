<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheDropdown from '../components/TheDropdown.vue'
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar />
  </header>
  <main class="flex w-full flex-col pt-24 pb-[7.5rem]">
    <form class="flex flex-col items-center gap-4 px-4">
      <TextField title="Nome" input-type="text" />
      <TextField title="Quantidade" input-type="number" />
      <TheDropdown />
      <TextField title="Preço" input-type="number" />
      <TextField title="Peso" input-type="text" />
      <TextField title="Validade" input-type="date" />
      <TextField title="Imagem" input-type="file" />
      <!-- prevent default -->
      <TheButton title="Salvar" />
    </form>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :registration="true" />
  </footer>
</template>
