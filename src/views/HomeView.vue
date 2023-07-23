<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'

const studioImages = ['/studio/DSC04725-2.jpg', '/studio/DSC04687-2.jpg', '/studio/DSC04700.jpg', '/studio/DSC04712.jpg', '/studio/DSC04717.jpg', '/studio/DSC04742.jpg']
const clusterImages = ['/cluster/DSC01935.jpg', '/cluster/DSC01905-2.jpg', '/cluster/DSC01922-2.jpg', '/cluster/DSC01940-2.jpg']

</script>

<template>
    <div class="flex flex-col gap-20">
        <div class="w-full">
            <picture>
                <source media="(min-width: 768px)" srcset="/hero/banner-lg.jpg" />
                <img src="/hero/banner-sm.jpg"
                    class="w-full h-full min-h-[350px] md:aspect-[16/6] block md:object-auto aspect-[16/10]" />
            </picture>
        </div>

        <div>
            <div class="container mx-auto">
                <h1 class="font-freight text-[48px] italic text-center">Element The Quarter</h1>
                <p class="font-freight text-[42px] text-center mt-1 italic">Liverpools newest student accomodation</p>



            </div>
        </div>

        <div class="flex flex-col gap-8">
            <div class="sm:grid sm:grid-cols-2 flex flex-col gap-4 container mx-auto ">
                <div class="order-2 sm:order-1">
                    <ImageCarousel :images="studioImages" />
                </div>
                <div class="flex flex-col gap-4 justify-center items-center order-1 sm:order-2">
                    <h2 class="text-[36px] font-freight">Studio</h2>
                    <p>Text about the studio</p>
                    <button>Discover More</button>
                </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 flex flex-col gap-4 container mx-auto ">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h2 class="text-[36px] font-freight">Cluster</h2>
                    <p>Text about the cluster</p>
                    <button>Discover More</button>
                </div>
                <div>
                    <ImageCarousel :images="clusterImages" />
                </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 flex flex-col gap-4 container mx-auto ">
                <div class="order-2 sm:order-1">
                    <ImageCarousel :images="studioImages" />
                </div>
                <div class="flex flex-col gap-4 justify-center items-center order-1 sm:order-2">
                    <h2 class="text-[36px] font-freight">Facilities</h2>
                    <p>Text about the facilities</p>
                    <button>Discover More</button>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4">
            <div class="md:flex md:justify-evenly grid sm:grid-cols-2 gap-10 xl:w-2/3 mx-auto font-freight">
                <div class="border rounded-lg p-8 shadow md:w-3/5 flex flex-col gap-4">
                    <p class="font-freight italic text-[32px] tracking-wide">"The facilities are second to none, one of the
                        best
                        places to
                        live in
                        the city"</p>
                    <span class="text-right">- John Doe</span>
                </div>
                <div class="border rounded-lg p-8 shadow md:w-3/5 flex flex-col gap-4">
                    <p class="italic text-[32px] tracking-wide">"The facilities are second to none, one of the
                        best
                        places to
                        live in
                        the city"</p>
                    <span class="text-right">- Sam Harrison</span>
                </div>
                <div class="border rounded-lg p-8 shadow md:w-3/5 flex flex-col gap-4">
                    <p class="font-freight italic text-[32px] tracking-wide">"The facilities are second to none, one of the
                        best
                        places to
                        live in
                        the city"</p>
                    <span class="text-right">- Olivia Cox</span>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="grid md:grid-cols-2 md:gap-6 gap-8">
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
        </div>
    </div>
</template>


