    
<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue'

</script>

<template>
  <Header />
  <main class="bg-[#FFFEF2]">
    <RouterView />
  </main>
  <footer id="footer">
    Some footer content here
  </footer>
</template>


