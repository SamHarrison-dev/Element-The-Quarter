<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'

const studioImages = ['/studio/DSC04725-2.jpg', '/studio/DSC04687-2.jpg', '/studio/DSC04700.jpg', '/studio/DSC04712.jpg', '/studio/DSC04717.jpg', '/studio/DSC04742.jpg']
const clusterImages = ['/cluster/DSC01935.jpg', '/cluster/DSC01905-2.jpg', '/cluster/DSC01922-2.jpg', '/cluster/DSC01940-2.jpg']


</script>

<template>
    <div class="flex flex-col gap-16">
        <div class="w-full">
            <figure class="relative flex justify-center">
                <picture class="w-full">
                    <source media="(min-width: 768px)" srcset="/hero/banner-lg.jpg" />
                    <img src="/hero/banner-sm.jpg"
                        class="aspect-[16/9] w-full h-auto max-w-full max-h-[816px] object-cover min-h-[50vh] brightness-50" />
                </picture>
                <div class="absolute text-white top-0 flex flex-col w-auto h-full justify-center px-4 md:px-0">
                    <h1 id="title"
                        class="font-freight text-[42px] md:text-[60px] lg:text-[72px] italic text-center tracking-wide">
                        Element The
                        Quarter
                    </h1>
                    <hr id="title-divide" class="border border-[#fff] translate-x-full" />
                    <h2 id="subtitle"
                        class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center italic tracking-wide">
                        Liverpools
                        newest
                        student
                        accomodation</h2>
                </div>
            </figure>
            <article class="bg-[#d9e3da] py-12 md:py-20">
                <div class="container mx-auto md:w-3/4 w-full flex flex-col gap-4 md:gap-6 px-6">
                    <div class="font-poppins flex flex-col gap-4 md:gap-6 text-[16px] md:text-[20px]">
                        <p>Welcome to our brand-new student accommodation building, located at the heart of the
                            vibrant city center!
                            Designed with the needs of modern students in mind, our prime location puts you within easy
                            reach of
                            univesity buildings, libraries, and all the excitement the city has to offer. </p>
                        <p>
                            Say goodbye to long
                            commutes and
                            hello to convenience and connectivity. Not only will you be immersed in the bustling urban
                            atmosphere,
                            but you'll also enjoy the advantage of having our very own on-site gym, promoting a healthy and
                            active
                            lifestyle. Embrace a dynamic living experience where academic excellence meets urban living, as
                            we
                            provide a comfortable, secure, and inspiring environment for you to thrive.
                        </p>

                    </div>
                </div>
            </article>
        </div>

        <section class="flex flex-col gap-8">
            <article class="sm:grid sm:grid-cols-2 flex flex-col gap-4 container mx-auto ">
                <div class="order-2 sm:order-1">
                    <ImageCarousel :images="studioImages" />
                </div>
                <div class="flex flex-col gap-3 justify-center items-center order-1 sm:order-2 font-poppins">
                    <div>
                        <h2 class="text-[36px] font-freight text-center">Studio</h2>
                        <span class="opacity-70 text-[16px]">1 bedroom spacious apartment</span>

                    </div>
                    <p>Text about the studio</p>
                    <a class="md:hidden flex" href="tel:+44(0)1512079990">
                        <button class="rounded-full py-3 px-5 bg-[#050A30] text-white hover:underline">Enquire
                            now</button></a>
                    <a class="hidden md:flex" href="#contact">
                        <button class="rounded-full py-3 px-5 bg-[#050A30] text-white hover:underline">Enquire
                            now</button></a>
                </div>
            </article>
            <article class="sm:grid sm:grid-cols-2 flex flex-col gap-4 container mx-auto ">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h2 class="text-[36px] font-freight">Cluster</h2>
                    <p>Text about the cluster</p>
                    <button>Discover More</button>
                </div>
                <div>
                    <ImageCarousel :images="clusterImages" />
                </div>
            </article>
            <article class="sm:grid sm:grid-cols-2 flex flex-col gap-4 container mx-auto ">
                <div class="order-2 sm:order-1">
                    <ImageCarousel :images="studioImages" />
                </div>
                <div class="flex flex-col gap-4 justify-center items-center order-1 sm:order-2">
                    <h2 class="text-[36px] font-freight">Facilities</h2>
                    <p>Text about the facilities</p>
                    <button>Discover More</button>
                </div>
            </article>
        </section>
        <section class="w-full md:py-20 py-12 bg-[#d9e3da]">
            <div class="container mx-auto px-6">
                <div
                    class="md:flex md:justify-evenly grid sm:grid-cols-2 gap-10 xl:w-3/4 mx-auto font-freight text-[24px] italic tracking-wide lg:text-[32px]">
                    <div class="border rounded-lg p-8 shadow md:w-3/4 flex flex-col gap-4 bg-[#f5f5f5]">
                        <q>The facilities are second to none, one of the
                            best
                            places to
                            live in
                            the city</q>
                        <span class="text-right font-poppins text-[14px] not-italic tracking-normal">- John Doe</span>
                    </div>
                    <div class="border rounded-lg p-8 shadow md:w-3/4 flex flex-col gap-4 bg-[#f5f5f5]">
                        <q>The facilities are second to none, one of the
                            best
                            places to
                            live in
                            the city</q>
                        <span class="text-right font-poppins text-[14px] not-italic tracking-normal">- Sam Harrison</span>
                    </div>
                    <div class="border rounded-lg p-8 shadow md:w-3/4 flex flex-col gap-4 bg-[#f5f5f5]">
                        <q>The facilities are second to none, one of the
                            best
                            places to
                            live in
                            the city</q>
                        <span class="text-right font-poppins text-[14px] not-italic tracking-normal">- Olivia Cox</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto mb-16">
            <div class="grid md:grid-cols-2 md:gap-6 gap-8 px-6">
                <div class="flex justify-center items-center flex-col gap-4">
                    <h2 class="font-freight text-[36px]">Location</h2>
                    <ul class="font-poppins text-[18px] flex flex-col gap-2">
                        <li class="flex gap-2"><img src="/icons/graduation.svg" height="24" width="24" />Ideal location for
                            University buildings</li>
                        <li class="flex gap-2"><img src="/icons/city.svg" height="24" width="24" />City Center location
                        </li>
                        <li class="flex gap-2"><img src="/icons/train.svg" height="24" width="24" />Walking distance to
                            Liverpool Lime Street station</li>
                        <li class="flex gap-2"><img src="/icons/shopping-cart.svg" height="24" width="24" />Less than 10
                            minutes to Tesco &amp; Lidl</li>
                        <li class="flex gap-2"><img src="/icons/hospital.svg" height="24" width="24" />7 minute walk to
                            Royal Liverpool University Hospital</li>
                    </ul>
                </div>
                <iframe class="rounded-lg shadow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.0670073078822!2d-2.9651933228248524!3d53.41362776968672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21e393e1b963%3A0x7ef05b0c42a706a0!2sElement%20The%20Quarter!5e0!3m2!1sen!2suk!4v1690121352280!5m2!1sen!2suk"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </div>
</template>

