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
  <main class="flex flex-col items-center pb-24">
    <div
      class="mx-2 mt-20 flex w-fit cursor-pointer gap-4 rounded-2xl bg-green-100 py-3 px-4 transition-colors duration-200 ease-in-out hover:bg-opacity-80 active:bg-opacity-70"
    >
      <i class="material-symbols-rounded text-amber-700">search</i>
      <p class="w-[15.75rem] text-amber-700">Pesquisar um produto</p>
    </div>

    <TheDivider subtitle="Categorias" />
    <section class="flex w-full flex-col gap-2 px-2">
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
