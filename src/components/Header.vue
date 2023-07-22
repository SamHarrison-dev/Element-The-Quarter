<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

</script>

<template>
    <header class="md:sticky md:top-0 w-full bg-black text-white z-50 px-4 md:px-0">
        <div class="grid grid-cols-2 container mx-auto py-4 items-center">
            <div>
                <a href='/' aria-label="return to home page">
                    <img src="/leglogo.svg" width="100" height="100" alt="Legacie logo" class="w-[100px] h-[50px]" />
                </a>
            </div>
            <nav class="justify-end gap-6 font-poppins hidden md:flex">
                <a class="hover:underline hover:cursor-pointer p-1" href="/studio" aria-label="Go to Studio room">Studio</a>
                <a class="hover:underline hover:cursor-pointer p-1" href="/cluster"
                    aria-label="Go to Cluster room">Cluster</a>
                <a class="md:block border rounded-full hover:underline hover:cursor-pointer py-1 px-4 hidden"
                    href="#footer">Contact</a>
                <a class="md:hidden border rounded-full hover:underline hover:cursor-pointer py-1 px-4 block"
                    href="tel:01512079990">Contact</a>
            </nav>
            <nav class="flex md:hidden justify-end cursor-pointer relative text-white">
                <div id="mobile-menu" :class="isMenuOpen ? 'open' : null" @click="isMenuOpen = !isMenuOpen">
                    <span class="top-0"></span>
                    <span class="top-[10px]"></span>
                    <span class="top-[20px]"></span>
                </div>
            </nav>
        </div>
        <div v-if="isMenuOpen" class="md:hidden flex justify-end">Some menu items</div>

    </header>
</template>


<style scoped>
#mobile-menu {
    width: 30px;
    height: 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
}

#mobile-menu span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#mobile-menu.open span:nth-child(1) {
    top: 10px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

#mobile-menu.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

#mobile-menu.open span:nth-child(3) {
    top: 10px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
</style>
