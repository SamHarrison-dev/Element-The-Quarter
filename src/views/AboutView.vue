<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useElementApi } from '@baleada/vue-features';

const images = ["https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/731535fe-f838-4b49-bd15-b9309a0773be/03-The-Quarter-Exterior-1-scaled.jpeg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/015e9d3c-6c0d-45e7-b83f-98c162c977b8/02-The-Quarter-Exterior-1-scaled.jpeg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg", "https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/d3c1ac65-fb09-48b6-be0d-cc4d97a2cdf8/18-ELEMENT-The-Quarter-Aerial-3-scaled.jpeg"]
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
        console.log("this one fired")
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
                ref="carousel" :ref="container.ref" tabindex="0">
                <figure v-for="(image, index) in images" :ref="items.getRef(index)"
                    :style="`width: ${width}px; height: ${height}px`" class="snap-center">
                    <picture>
                        <source media="(min-width: 1200px)" :srcset="`${image}?format=1400w`" />
                        <source media="(min-width: 992px)" :srcset="`${image}?format=1200w`" />
                        <source media="(min-width: 768px)" :srcset="`${image}?format=992w`" />
                        <source media="(min-width: 576px)" :srcset="`${image}?format=768w`" />
                        <img :src="`${image}?format=576w`"
                            class="aspect-[16/9] w-full h-full max-w-full max-h-[816px] object-cover min-h-[50vh] brightness-50" />
                    </picture>
                </figure>
            </div>
            <button type="button" aria-label="Toggle next image"
                class="absolute invisible right-2 top-1/2 flex -translate-y-1/2 transition" ref="nextButton"
                @click.prevent="changeImage(1)">
                <img src="/icons/chevron-right.svg" class="inline h-8 w-8" :aria-hidden="true" />
            </button>
        </div>
        <section class="container mx-auto px-6 flex flex-col items-center justify-center">
            <div class="w-full md:w-3/4">
                <h2 class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center">About us heading</h2>
                <p class="font-poppins text-[16px] md:text-[20px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione veniam
                    quas
                    laboriosam sapiente numquam quidem accusamus temporibus. Dolores, libero. Sunt, dignissimos? Blanditiis
                    dicta
                    est, omnis fugiat magnam veritatis non nulla.</p>

            </div>

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