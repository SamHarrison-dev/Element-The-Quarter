    
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

<style global>
html {
  scroll-behavior: smooth
}

#title {
  opacity: 0;
  transform: translateY(-50px);
  animation: shiftDownAnimation 1s forwards;
}

#subtitle {
  opacity: 0;
  transform: translateY(50px);
  animation: shiftUpAnimation 1s forwards;
}

#title-divide {
  opacity: 0;
  animation: slideInAnimation 2.5s forwards;
}

@keyframes slideInAnimation {
  to {
    opacity: 1;
  }
}

@keyframes shiftDownAnimation {
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes shiftUpAnimation {
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
