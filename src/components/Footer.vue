<script setup>
</script>

<template>
    <footer class="w-full px-6 md:px-0 bg-[#050A30] text-white">
        <div class="container mx-auto py-10">
            <img src="/leglogo.svg" width="100" height="100" alt="Legacie logo" class="w-[100px] h-[50px]" />
            <div class="flex gap-10 md:gap-20 flex-wrap flex-col sm:flex-row sm:justify-between md:justify-normal">
                <div class="flex gap-3 flex-col md:pr-10" id="contact">
                    <h3 class="font-freight underline underline-offset-4 text-[28px]">Contact</h3>
                    <div class="flex gap-4">
                        <img src="/icons/phone.svg" height="20" width="20" />
                        <a href="tel:+44(0)1512079990" class="underline">+44 (0) 1512079990</a>
                    </div>
                    <div class="flex gap-4">
                        <img src="/icons/mail.svg" height="20" width="20" />
                        <a href="mailto:abc@example.com" class="underline">abc@example.com</a>
                    </div>

                </div>
                <div class="flex flex-col gap-3 md:pr-10">
                    <h3 class="font-freight underline underline-offset-4 text-[28px]">Explore</h3>
                    <div class="flex gap-4 flex-col">
                        <a class="hover:underline" href="/about">About</a>
                        <a class="hover:underline" href="/faq">FAQ's</a>
                    </div>
                </div>
                <div class="flex flex-col gap-3 md:pr-10">
                    <h3 class="font-freight underline underline-offset-4 text-[28px]">Connect</h3>
                    <div class="flex gap-4">
                        <figure class="bg-white rounded-full p-2 hover:cursor-pointer hover:outline hover:outline-2">
                            <a href="https://www.twitter.com" target="_blank">
                                <img src="/icons/twitter.svg" height="24" width="24" />
                            </a>
                        </figure>
                        <figure class="bg-white rounded-full p-2 hover:cursor-pointer hover:outline hover:outline-2">
                            <a href="https://www.instagram.com" target="_blank">
                                <img src="/icons/instagram.svg" height="24" width="24" />
                            </a>
                        </figure>

                    </div>
                </div>
            </div>

        </div>

    </footer>
</template>