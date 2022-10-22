<script setup>
import TextField from '../components/TextField.vue'
import TheButton from '../components/TheButton.vue'
</script>
<template>
  <header class="flex flex-col gap-1 px-6 pt-14">
    <div class="flex items-center gap-1">
      <h1 class="text-2xl font-semibold">Login</h1>
      <i class="material-symbols-rounded"> login </i>
    </div>
    <p class="text-sm">Bem-vindo de volta!</p>
  </header>
  <main
    class="flex w-full shrink grow flex-col items-center justify-center py-14 px-6"
  >
    <div class="flex flex-col gap-4">
      <h1 class="text-center text-5xl font-medium">🪴 Equilíbrio</h1>
      <h1 class="text-center text-5xl font-bold">Natural 🍃</h1>
    </div>
    <form class="mt-12 flex w-full flex-col items-center gap-6" @submit.prevent>
      <TextField title="Acesso chave" input-type="text" />
      <TheButton title="Entrar" />
    </form>
    <p class="mt-12 hover:cursor-pointer">Entrar como visitante</p>
  </main>
  <!-- decorations -->
</template>
