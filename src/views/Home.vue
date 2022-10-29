<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineAsyncComponent } from 'vue'
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheDivider from '../components/TheDivider.vue'
// import SearchModal from '../components/SearchModal.vue'

const asyncList = defineAsyncComponent(() =>
  import('../components/TheList.vue')
)

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
      <asyncList
        title="Alimentícios"
        :user="props.user"
        :market="props.market"
        category="alimenticios"
        bg-picture="bg-category1"
      />
      <asyncList
        title="Beleza"
        :user="props.user"
        :market="props.market"
        category="beleza"
        bg-picture="bg-category2"
      />
      <asyncList
        title="Óleos essenciais"
        :user="props.user"
        :market="props.market"
        category="oleos"
        bg-picture="bg-category3"
      />
      <asyncList
        title="Suplementos"
        :user="props.user"
        :market="props.market"
        category="suplementos"
        bg-picture="bg-category4"
      />
      <asyncList
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
  <!-- <SearchModal /> -->
</template>
