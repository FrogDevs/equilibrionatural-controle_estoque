<script setup>
// Ver detalhes e editar
const props = defineProps({
  id: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <!-- <p>O id é {{ props.id }}</p> -->
  <header class="fixed w-full top-0">
    <!-- toolbar -->
    <nav class="flex justify-between py-5 px-4 bg-slate-100">
      <i class="material-symbols-rounded">arrow_back</i>
    </nav>
  </header>
</template>
