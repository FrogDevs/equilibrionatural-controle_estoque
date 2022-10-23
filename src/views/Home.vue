<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheList from '../components/TheList.vue'
import TheDivider from '../components/TheDivider.vue'

const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  }
})

// const hideBar = ref(true)
// let lastScrollTop = 0

// window.addEventListener(
//   'scroll',
//   () => {
//     var st = window.pageYOffset || document.documentElement.scrollTop

//     if (st > lastScrollTop) {
//       hideBar.value = false
//     } else {
//       hideBar.value = true
//     }

//     lastScrollTop = st <= 0 ? 0 : st
//   },
//   false
// )
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar v-if="hideBar" :user="props.user" :market="props.market" />
  </header>
  <main class="mt-16 pb-24">
    <TheDivider subtitle="Categorias" />
    <section class="flex flex-col gap-2 px-2">
      <TheList
        title="Alimentícios"
        :user="props.user"
        :market="props.market"
        category="alimenticios"
        bg-picture="bg-category1"
      />
      <TheList
        title="Beleza"
        :user="props.user"
        :market="props.market"
        category="beleza"
        bg-picture="bg-category2"
      />
      <TheList
        title="Óleos essenciais"
        :user="props.user"
        :market="props.market"
        category="oleos"
        bg-picture="bg-category3"
      />
      <TheList
        title="Suplementos"
        :user="props.user"
        :market="props.market"
        category="suplementos"
        bg-picture="bg-category4"
      />
      <TheList
        title="Vida & Saúde"
        :user="props.user"
        :market="props.market"
        category="vida"
        bg-picture="bg-category5"
      />
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar
      v-if="hideBar"
      :home="true"
      :user="props.user"
      :market="props.market"
    />
  </footer>
</template>
