    
<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Header />
  <main class="grow">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
html {
  scroll-behavior: smooth
}
</style>
