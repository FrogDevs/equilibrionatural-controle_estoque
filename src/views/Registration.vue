<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheDropdown from '../components/TheDropdown.vue'
</script>
<template>
  <header class="fixed top-0 w-full">
    <ToolBar />
  </header>
  <main class="flex w-full flex-col pt-20 pb-28">
    <form class="flex flex-col items-center gap-4 px-4">
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TheDropdown />
      <TextField />
      <!-- prevent default -->
      <TheButton />
    </form>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar />
  </footer>
</template>
