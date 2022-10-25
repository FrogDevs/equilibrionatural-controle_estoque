<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheList from '../components/TheList.vue'
import TheDivider from '../components/TheDivider.vue'
import TheModal from '../components/TheModal.vue'

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
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar :user="props.user" :market="props.market" />
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
    <NavigationBar :home="true" :user="props.user" :market="props.market" />
  </footer>
  <!-- <TheModal /> -->
</template>
