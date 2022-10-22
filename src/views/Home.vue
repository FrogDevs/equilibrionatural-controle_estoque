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
    <ToolBar :market="props.market" />
  </header>
  <main>
    <TheDivider subtitle="Categorias" />
    <section class="flex flex-col gap-2 px-2">
      <TheList
        title="Alimentícios"
        :link="`${props.user}/${props.market}/search`"
      />
      <TheList title="Beleza" :link="`${props.user}/${props.market}/search`" />
      <TheList
        title="Óleos essenciais"
        :link="`${props.user}/${props.market}/search`"
      />
      <TheList
        title="Suplementos"
        :link="`${props.user}/${props.market}/search`"
      />
      <TheList
        title="Vida & Saúde"
        :link="`${props.user}/${props.market}/search`"
      />
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :home="true" :market="props.market" />
  </footer>
</template>
