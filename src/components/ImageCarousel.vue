<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'

const props = defineProps({
    images: Array
})

const carousel = ref(null)
const mainImage = ref(null)
const mainImageIndex = ref(0)
const width = ref(0)
const scrollable = ref(false)
const touchable = ref(false)
const loading = ref(true)

function setScrollTouch() {
    width.value = mainImage.value.clientWidth;
    scrollable.value = props.images?.length > 1;
    touchable.value = touchEnable();
}

function setMainIndex(index) {
    carousel.value.focus();
    carousel.value.scrollTo({
        top: 0,
        left: width.value * index
    });
    mainImageIndex.value = index
}

function changeImage(index) {
    let scrollCoordinate = carousel.value.scrollLeft + width.value * index;

    if (mainImageIndex.value + index < 0) {
        mainImageIndex.value = props.images.length - 1;
        scrollCoordinate = carousel.value.scrollLeft + width.value * props.images.length;
    } else if (mainImageIndex.value + index > props.images.length - 1) {
        mainImageIndex.value = 0;
        scrollCoordinate = carousel.value.scrollRight + width.value * props.images.length;
    } else {
        mainImageIndex.value += index
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

watch(() => props.images, (newVal, oldVal) => {
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
    loading.value = false
})
</script>

<template>
    <div>
        <div ref="mainImage" class="relative">
            <div v-if="loading">
            </div>
            <div v-else>
                <button v-if="scrollable && !touchable" type="button" aria-label="Toggle previous image"
                    class="absolute left-2 top-1/2 flex -translate-y-1/2 border bg-white transition"
                    @click.prevent="changeImage(-1)">
                    <img src="/icons/chevron-left.svg" class="inline h-8 w-8" :aria-hidden="true" />
                </button>
                <div class="carousel no-scrollbar grid min-w-full snap-x snap-mandatory auto-cols-max grid-flow-col overflow-x-auto overflow-y-hidden"
                    ref="carousel" tabindex="0">
                    <div v-for="(image, index) in images" :key="index" :style="`width: ${width}px; height: ${width}px`"
                        class="snap-center">
                        <img :src="image" class="object-cover w-full h-full rounded-lg" />
                    </div>
                </div>
                <button v-if="scrollable && !touchable" type="button" aria-label="Toggle next image"
                    class="absolute right-2 top-1/2 flex -translate-y-1/2 border bg-white transition"
                    @click.prevent="changeImage(1)">
                    <img src="/icons/chevron-right.svg" class="inline h-8 w-8" :aria-hidden="true" />
                </button>
            </div>
        </div>
        <div clas="sr-only flex flex-row items-center md:not-sr-only" v-if="scrollable">
            <ul class="flex-no-wrap mt-6 flex h-full w-full items-center justify-center gap-4">
                <li v-for="(image, index) in images" :key="index">
                    <button type="button" :data-attr="index" @click="setMainIndex(index)"
                        class="border-black hover:bg-black block h-[8px] w-[8px] rounded border p-0 content-none"
                        :class="index === mainImageIndex ? 'bg-black' : 'bg-transparent'"
                        :aria-label="`open image ${index}`"></button>
                </li>
            </ul>

        </div>
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