<script setup>
import TextField from '../components/TextField.vue'
import TheButton from '../components/TheButton.vue'
import router from '../router'

function singIn() {
  router.push('/admin/stores')
}
</script>
<template>
  <!-- img -->
  <div
    class="absolute top-0 hidden h-screen w-2/4 bg-store1 bg-cover lg:block"
  ></div>

  <div class="absolute top-0 right-0 flex h-screen w-full flex-col lg:w-2/4">
    <header class="z-20 flex w-full flex-row p-6 lg:p-0">
      <div class="flex w-full flex-col gap-1 lg:w-2/4 lg:p-6">
        <div class="flex items-center gap-1">
          <h1 class="text-2xl font-semibold text-amber-800">Login</h1>
          <i class="material-symbols-rounded text-amber-800"> login </i>
        </div>
        <p class="text-sm text-amber-800">Bem-vindo de volta!</p>
      </div>
    </header>
    <main
      class="relative z-20 flex h-full w-full shrink grow flex-row items-center justify-center py-14 px-6 lg:px-0"
    >
      <div class="flex w-full flex-col items-center">
        <div class="flex flex-col gap-4">
          <h1 class="text-center text-5xl font-medium text-amber-700">
            🪴 Equilíbrio
          </h1>
          <h1 class="text-center text-5xl font-bold text-amber-700">
            Natural 🍃
          </h1>
        </div>
        <form
          class="mt-12 flex w-full flex-col items-center gap-6 lg:w-2/4"
          @submit.prevent="singIn"
        >
          <TextField title="Chave de acesso" input-type="text" />
          <TheButton title="Entrar" />
        </form>
        <router-link
          :to="`/visitante/stores`"
          class="mt-12 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-60"
        >
          Entrar como visitante
        </router-link>
      </div>
    </main>
  </div>

  <!-- decorations -->
  <div class="absolute top-0 z-10 w-full sm:hidden">
    <div class="flex h-16 bg-green-300 bg-opacity-20"></div>
    <div class="bg-clip-1 flex h-80 bg-green-300 bg-opacity-20"></div>
  </div>
  <div
    class="bg-clip-2 absolute top-[-1.5rem] flex h-96 w-full bg-green-300 bg-opacity-20 sm:hidden"
  ></div>
</template>

<style scoped>
.bg-clip-1 {
  clip-path: ellipse(50% 50% at 50% 0%);
}

.bg-clip-2 {
  clip-path: ellipse(50% 50% at 95% 0%);
}
</style>
