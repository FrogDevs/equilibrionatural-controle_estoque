<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
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
</script>
<template>
  <header>
    <ToolBar :user="props.user" :market="props.market" />
  </header>
  <main>
    <TheDivider subtitle="Categorias" />
    <section class="flex flex-col gap-2 px-2">
      <TheList
        title="Alimentícios"
        :user="props.user"
        :market="props.market"
        bg-picture="bg-store1"
      />
      <TheList
        title="Beleza"
        :user="props.user"
        :market="props.market"
        bg-picture="bg-store1"
      />
      <TheList
        title="Óleos essenciais"
        :user="props.user"
        :market="props.market"
        bg-picture="bg-store1"
      />
      <TheList
        title="Suplementos"
        :user="props.user"
        :market="props.market"
        bg-picture="bg-store1"
      />
      <TheList
        title="Vida & Saúde"
        :user="props.user"
        :market="props.market"
        bg-picture="bg-store1"
      />
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :home="true" :user="props.user" :market="props.market" />
  </footer>
</template>
