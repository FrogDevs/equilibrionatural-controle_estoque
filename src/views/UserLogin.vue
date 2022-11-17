<script setup>
import { ref } from 'vue'
import TextField from '../components/TextField.vue'
import TheButton from '../components/TheButton.vue'
import TheDialogue from '../components/TheDialogue.vue'
import { useUserStore } from '../stores/UserStore'
import SimpleCrypto from 'simple-crypto-js'
import router from '../router'

const userStore = useUserStore()
userStore.setUserPass()

const inputPass = ref(null)
const showDialogue = ref(false)

function addInputPass(value) {
  inputPass.value = value
}

function singInAdmin() {
  const userId = userStore.getUserId
  const userPass = userStore.getUserPass
  const simpleCrypto = new SimpleCrypto(userId)

  if (inputPass.value == simpleCrypto.decrypt(userPass)) {
    userStore.setUser(true, 'admin')
    router.push(`/${userStore.type}/stores`)
  } else {
    showDialogue.value = true
  }
}

function singInTourist() {
  userStore.setUser(true, 'visitante')
  router.push(`/${userStore.type}/stores`)
}
</script>
<template>
  <TheDialogue
    v-if="showDialogue"
    title="Aviso"
    subtitle="Chave de acesso incorreta."
    first-action="Entendi"
    @first-action="showDialogue = false"
  />

  <!-- img -->
  <div
    class="absolute top-0 hidden h-screen w-2/4 bg-store1hd bg-cover lg:block"
  ></div>

  <div class="absolute top-0 right-0 flex h-screen w-full flex-col lg:w-2/4">
    <header class="z-20 flex w-full flex-row p-6 lg:p-0">
      <div class="flex w-full flex-col gap-1 lg:w-2/4 lg:p-6">
        <div class="flex items-center gap-1">
          <h1 class="text-2xl font-semibold text-onBackground">Login</h1>
          <i class="material-symbols-rounded text-onBackground"> login </i>
        </div>
        <p class="text-sm text-onBackground">Bem-vindo de volta!</p>
      </div>
    </header>
    <main
      class="relative z-20 flex h-full w-full shrink grow flex-row items-center justify-center py-14 px-6 lg:px-0"
    >
      <div class="flex w-full flex-col items-center">
        <div class="flex flex-col gap-4">
          <h1 class="text-center text-5xl font-medium text-tertiary">
            🪴 Equilíbrio
          </h1>
          <h1 class="text-center text-5xl font-bold text-tertiary">
            Natural 🍃
          </h1>
        </div>
        <form
          class="mt-12 flex w-full flex-col items-center gap-6 lg:w-2/4"
          @submit.prevent="singInAdmin"
        >
          <TextField
            title="Chave de acesso"
            input-type="password"
            @input-value="addInputPass"
          />
          <TheButton title="Entrar" />
        </form>
        <p
          class="mt-12 cursor-pointer text-secondary transition-colors duration-200 ease-in-out hover:text-opacity-80 active:text-opacity-60"
          @click="singInTourist"
        >
          Entrar como visitante
        </p>
      </div>
    </main>
  </div>

  <!-- decorations -->
  <div class="absolute top-0 z-10 w-full sm:hidden">
    <div class="flex h-16 bg-tertiaryContainer bg-opacity-25"></div>
    <div class="bg-clip-1 flex h-80 bg-tertiaryContainer bg-opacity-25"></div>
  </div>
  <div
    class="bg-clip-2 absolute top-[-1.5rem] flex h-96 w-full bg-tertiaryContainer bg-opacity-25 sm:hidden"
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
