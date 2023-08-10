<script setup>
import { useHead } from '@vueuse/head';
import { ref, nextTick, onMounted, watch } from 'vue'
import { useElementApi } from '@baleada/vue-features';

useHead({
    title: 'Element The Quarter | About us',
    meta: [
        {
            name: 'description',
            content: 'Discover The Element Quarter - Luxury student accommodation at the heart of Liverpool\'s city center. Limited rooms available for clearing today!'
        }
    ]
})

const images = ["https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/015e9d3c-6c0d-45e7-b83f-98c162c977b8/02-The-Quarter-Exterior-1-scaled.jpeg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/d3c1ac65-fb09-48b6-be0d-cc4d97a2cdf8/18-ELEMENT-The-Quarter-Aerial-3-scaled.jpeg"]
const items = useElementApi({ kind: 'list' })
const container = useElementApi()

const carousel = ref(null)
const mainImage = ref(null)
const mainImageIndex = ref(0)
const width = ref(0)
const height = ref(0)
const nextButton = ref(null)
const scrollable = ref(false)
const touchable = ref(false)

function setScrollTouch() {
    width.value = mainImage.value.clientWidth;
    height.value = mainImage.value.outerHeight;
    scrollable.value = images?.length > 1;
    touchable.value = touchEnable();
}

function setMainIndex(index) {
    carousel.value.focus();
    carousel.value.scrollTo({
        top: 0,
        left: width.value * index
    });
}

function changeImage(index) {
    let scrollCoordinate = carousel.value.scrollLeft + width.value * index;

    if (mainImageIndex.value + index < 0) {
        scrollCoordinate = carousel.value.scrollLeft + width.value * images.length;
    } else if (mainImageIndex.value + index > images.length - 1) {
        scrollCoordinate = carousel.value.scrollRight + width.value * images.length;
    }

    carousel.value.focus();
    carousel.value.scrollTo({
        top: 0,
        left: scrollCoordinate
    })
}

function touchEnable() {
    return (
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    )
}

watch(() => images, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        setMainIndex(0);
    }
}, {
    deep: true
})

onMounted(() => {
    setScrollTouch();
    nextTick(() => {
        window.addEventListener('resize', setScrollTouch)
    })

    let observer = new IntersectionObserver(entries => {
        const { target } = entries[0]
        const index = items.elements.value.findIndex((el) => el.isSameNode(target))
        mainImageIndex.value = index

    }, {
        threshold: 0.85,
        root: container.element.value
    })

    for (const element of items.elements.value) {
        observer.observe(element)
    }

    setInterval(() => {
        nextButton.value.click()
    }, 10000)


})
</script>

<template>
    <div class="flex flex-col gap-16">

        <div ref="mainImage" class="relative flex justify-center">
            <div
                class="absolute z-20 text-white top-0 flex flex-col w-auto h-full justify-center px-6 md:px-0 justify-self-center">
                <h1 id="title"
                    class="font-freight text-[42px] md:text-[60px] lg:text-[72px] italic text-center tracking-wide">
                    Element The
                    Quarter
                </h1>
                <hr id="title-divide" class="border border-[#fff]" />
                <h2 id="subtitle"
                    class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center italic tracking-wide">
                    Discover more about us</h2>

            </div>
            <div class="carousel no-scrollbar grid min-w-full snap-x snap-mandatory auto-cols-max grid-flow-col overflow-x-hidden overflow-y-hidden"
                ref="carousel" :ref="container.ref">
                <figure v-for="(image, index) in images" :ref="items.getRef(index)"
                    :style="`width: ${width}px; height: ${height}px`" class="snap-center">
                    <picture>
                        <source media="(min-width: 1200px)" :srcset="`${image}?format=1400w`" />
                        <source media="(min-width: 992px)" :srcset="`${image}?format=1200w`" />
                        <source media="(min-width: 768px)" :srcset="`${image}?format=992w`" />
                        <source media="(min-width: 576px)" :srcset="`${image}?format=768w`" />
                        <img :src="`${image}?format=576w`"
                            class="aspect-[16/9] w-full h-full max-w-full max-h-[816px] object-cover min-h-[50vh] brightness-50"
                            :alt="`Element The Quarter - image ${index + 1}`" />
                    </picture>
                </figure>
            </div>
            <button type="button" aria-label="Toggle next image"
                class="absolute invisible right-2 top-1/2 flex -translate-y-1/2 transition" ref="nextButton"
                @click.prevent="changeImage(1)">
                <img src="/icons/chevron-right.svg" class="inline h-8 w-8" :aria-hidden="true" />
            </button>
        </div>
        <section class="container mx-auto px-6 mb-16 flex flex-col gap-10 justify-center items-center">
            <div class="w-full md:w-3/4 flex flex-col gap-10 justify-center items-center">
                <div>
                    <h2 class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center mb-6">Why Element The
                        Quarter?
                    </h2>
                    <p class="font-poppins text-[16px] md:text-[20px]">Welcome to Legacie's state-of-the-art student living
                        community, where sustainability, modern comfort, and vibrant community converge to create an
                        unparalleled living experience. We're not just a student accommodation option; we're a way of life
                        that
                        prioritises your well-being, your aspirations, and the planet.</p>
                </div>
                <div>
                    <h2 class="font-freight text-[30px] md:text-[36px] lg:text-[40px] text-left mb-4">Our Mission
                    </h2>
                    <p class="font-poppins text-[16px] md:text-[20px]">At the heart of Element The Quarter lies a
                        deep-rooted commitment to sustainability. Our mission is to provide you with a living space that not
                        only nurtures your academic journey but also fosters a sense of responsibility towards the
                        environment with low carbon smart technology promoting unrivalled sustainability.</p>
                </div>
                <div>
                    <h2 class="font-freight text-[30px] md:text-[36px] lg:text-[40px] text-left mb-4">Green Living,
                        Redefined
                    </h2>
                    <p class="font-poppins text-[16px] md:text-[20px]">Our dedication to sustainability is reflected in
                        every facet of our student building. From solar panels that power our energy-efficient appliances to
                        rainwater recycling systems that harvest rainwater for use in toilets, irrigation and laundry
                        purposes. At Legacie, we aim to inspire sustainable habits that you can carry with you throughout
                        your life, creating a positive impact for generations to come.</p>
                </div>
                <div>
                    <h2 class="font-freight text-[30px] md:text-[36px] lg:text-[40px] text-left mb-4">Community, Connection,
                        Camaraderie
                    </h2>
                    <p class="font-poppins text-[16px] md:text-[20px]">At Element The Quarter, you're not just a tenant;
                        you're a valued member of a diverse and dynamic community. We've carefully curated communal spaces
                        that encourage interactions, friendships, and shared experiences. From cosy common rooms for
                        laughter-filled gatherings to study areas that fuel your academic ambitions, we're dedicated to
                        fostering an environment where lasting connections are made.</p>
                </div>
                <div>
                    <h2 class="font-freight text-[30px] md:text-[36px] lg:text-[40px] text-left mb-4">Amenities that Elevate
                    </h2>
                    <p class="font-poppins text-[16px] md:text-[20px]">Step into a realm of modern convenience where every
                        amenity is designed to enhance your lifestyle. Our on-site gym ensures you stay active and healthy,
                        our cinema room transforms movie nights into cinematic adventures, and our games room offers a
                        welcoming space to meet old friends, or make new. Whether you're seeking physical activity,
                        entertainment, or moments of serenity, we have you covered.</p>
                </div>
                <div>
                    <h2 class="font-freight text-[30px] md:text-[36px] lg:text-[40px] text-left mb-4">Location, Connection,
                        Convenience
                    </h2>
                    <p class="font-poppins text-[16px] md:text-[20px]">Situated in the heart of the city, Element The
                        Quarter offers unparalleled accessibility to your university buildings, city centre, and essential
                        amenities. Embrace city life while enjoying the comfort of a home that's designed with your needs in
                        mind. Your journey becomes smoother, and your experiences become richer when you're part of our
                        vibrant student community.</p>
                </div>

            </div>
            <h2 class="text-center font-freight text-[24px] md:text-[30px] lg:text-[36px] italic">Welcome to the
                future of student living - welcome to a place where you belong.</h2>

        </section>
    </div>
</template>

<style scoped>
.carousel {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>