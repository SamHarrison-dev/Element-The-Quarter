<script setup>

</script>

<template>
    <header class="md:sticky md:top-0 w-full bg-black text-white z-50">
        <div class="grid grid-cols-2 container mx-auto py-4 items-center">
            <div>
                <a href='/' aria-label="return to home page">
                    <img src="/leglogo.svg" width="100" height="100" alt="Legacie logo" class="w-[100px] h-[50px]" />
                </a>
            </div>
            <nav class="flex justify-end gap-6 font-poppins">
                <a class="hover:underline hover:cursor-pointer p-1" href="/studio" aria-label="Go to Studio room">Studio</a>
                <a class="hover:underline hover:cursor-pointer p-1" href="/cluster"
                    aria-label="Go to Cluster room">Cluster</a>
                <a class="md:block border rounded-full hover:underline hover:cursor-pointer py-1 px-4 hidden"
                    href="#footer">Contact</a>
                <a class="md:hidden border rounded-full hover:underline hover:cursor-pointer py-1 px-4 block"
                    href="tel:01512079990">Contact</a>
            </nav>
        </div>

    </header>
</template>

