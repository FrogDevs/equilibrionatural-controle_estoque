<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TheCard from '../components/TheCard.vue'

const props = defineProps({
  user: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <main class="flex h-screen justify-center lg:items-center">
    <div
      class="flex h-fit w-fit flex-col items-center justify-center py-6 sm:h-full md:gap-6"
    >
      <h1 class="text-xl text-amber-800">Selecione uma unidade</h1>
      <div
        class="flex w-full flex-col items-center justify-center md:flex-row md:gap-6"
      >
        <TheCard
          :link="`/${props.user}/unidade1/home`"
          bg="bg-store1 bg-cover bg-center bg-no-repeat"
          title="Unidade 1"
          subtitle="Rua Imberé, 373"
        />
        <TheCard
          :link="`/${props.user}/unidade2/home`"
          bg="bg-store2 bg-cover bg-center bg-no-repeat"
          title="Unidade 2"
          subtitle="Av. Taquandava, 1203"
        />
      </div>
    </div>
  </main>
</template>
