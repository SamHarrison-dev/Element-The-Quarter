<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useElementApi } from '@baleada/vue-features';

const props = defineProps({
    images: Array
})

const items = useElementApi({ kind: 'list' })
const container = useElementApi()

const carousel = ref(null)
const mainImage = ref(null)
const mainImageIndex = ref(0)
const width = ref(0)
const scrollable = ref(false)
const touchable = ref(false)
const announcer = ref(false)

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
        scrollCoordinate = carousel.value.scrollLeft + width.value * props.images.length;
    } else if (mainImageIndex.value + index > props.images.length - 1) {
        scrollCoordinate = carousel.value.scrollRight + width.value * props.images.length;
    }

    mainImageIndex.value = index

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

    let observer = new IntersectionObserver(entries => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting)
        if (intersectingEntry) {
            const { target } = intersectingEntry
            const index = items.elements.value.findIndex((el) => el.isSameNode(target))
            mainImageIndex.value = index

            announcer.value.textContent = `Image ${index + 1} of ${props.images.length}`
        }

    }, {
        threshold: 1,
        root: container.element.value
    })

    for (const element of items.elements.value) {
        observer.observe(element)
    }

})
</script>

<template>
    <div ref="mainImage" class="relative" aria-label="Image carousel" tabindex="0">
        <button v-if="scrollable && !touchable" type="button" aria-label="Toggle previous image"
            class="absolute left-2 top-1/2 flex -translate-y-1/2 transition" @click.prevent="changeImage(-1)">
            <img src="/icons/chevron-left.svg" class="inline h-8 w-8" :aria-hidden="true" />
        </button>
        <div class="carousel no-scrollbar grid min-w-full snap-x snap-mandatory auto-cols-max grid-flow-col overflow-x-auto overflow-y-hidden"
            ref="carousel" :ref="container.ref" role="list" :aria-hidden="scrollable ? 'false' : 'true'">
            <figure v-for="(image, index) in images" :ref="items.getRef(index)" :key="index"
                :style="`width: ${width}px; height: ${width}px`" class="snap-center" role="listitem">
                <img :src="image" class="object-cover w-full h-full rounded-lg" aria-hidden="true"
                    :alt="`image ${index + 1}`" :aria-hidden="true" />
            </figure>
        </div>
        <button v-if="scrollable && !touchable" type="button" aria-label="Toggle next image"
            class="absolute right-2 top-1/2 flex -translate-y-1/2 transition" @click.prevent="changeImage(1)">
            <img src="/icons/chevron-right.svg" class="inline h-8 w-8" :aria-hidden="true" loading="eager" />
        </button>
    </div>
    <div clas="flex flex-row items-center" v-if="scrollable">
        <ul class="flex-no-wrap mt-6 flex h-full w-full items-center justify-center gap-4 relative"
            aria-label="Student accomodation images">
            <li v-for="(image, index) in images" :key="index">
                <button type="button" @click="setMainIndex(index)" tabindex="0"
                    class="border-black hover:bg-black block h-[8px] w-[8px] rounded border p-0 content-none"
                    :class="index === mainImageIndex ? 'bg-black' : 'bg-transparent'" :title="`open image ${index + 1}`"
                    :aria-current="index === mainImageIndex ? 'page' : null"></button>
            </li>
        </ul>
        <div ref="announcer" role="log" aria-live="assertive" aria-atomic="true"
            class="absolute translat-x-[-100000px] overflow-hidden w-[1px] h-[1px] top-auto"></div>
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