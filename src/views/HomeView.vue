<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'

const studioImages = ['/studio/StudioKitchen.jpg', '/studio/StudioArea.jpg', '/studio/StudioBathroom.jpg', '/studio/StudioBathroom2.jpg', '/studio/StudioBed.jpg', '/studio/StudioDesk.jpg', '/studio/StudioSofa.jpg']
const clusterImages = ['/cluster/ClusterBed.jpg', '/cluster/ClusterBed2.jpg', '/cluster/ClusterDesk.jpg', '/cluster/ClusterKitchen.jpg']

</script>

<template>
    <div class="flex flex-col gap-20">
        <div class="w-full">
            <picture>
                <source media="(min-width: 768px)" srcset="/hero/banner-lg.jpg" />
                <img src="/hero/banner-sm.jpg"
                    class="w-full h-full min-h-[350px] md:aspect-[16/6] md:object-auto aspect-[16/10]" />
            </picture>
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
    </div>
</template>


