<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
import TextField from '../components/TextField.vue'
import TheDropdown from '../components/TheDropdown.vue'
</script>
<template>
  <header class="fixed w-full top-0">
    <ToolBar />
  </header>
  <main class="flex flex-col w-full h-full overflow-y-scroll my-20">
    <form class="flex flex-col items-center px-4 gap-4">
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
  <footer class="fixed w-full bottom-0">
    <NavigationBar />
  </footer>
</template>
