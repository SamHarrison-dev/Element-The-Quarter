<script setup>
</script>

<template>
    <div class="w-full flex flex-col gap-16">
        <div class="relative flex justify-center">
            <figure class="w-full">
                <picture>
                    <source media="(min-width: 1200px)"
                        srcset="https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg?format=1400w" />
                    <source media="(min-width: 992px)"
                        srcset="https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg?format=1200w" />
                    <source media="(min-width: 768px)"
                        srcset="https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg?format=992w" />
                    <source media="(min-width: 576px)"
                        srcset="https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg?format=768w" />
                    <img src="https://images.squarespace-cdn.com/content/v1/606205865118af033d116181/1617099896080-GQO81L0T9YIARUX9XUGG/14+ELEMENT+-+The+Quarter+Exterior.jpg?format=576w"
                        class="aspect-[16/9] w-full h-auto max-w-full max-h-[816px] object-cover min-h-[50vh] brightness-50" />
                </picture>
            </figure>
            <div class="absolute text-white top-0 flex flex-col w-auto h-full justify-center px-4 md:px-0">
                <h1 id="title"
                    class="font-freight text-[42px] md:text-[60px] lg:text-[72px] italic text-center tracking-wide">
                    Element The
                    Quarter
                </h1>
                <hr id="title-divide" class="border border-[#fff] translate-x-full" />
                <h2 id="subtitle"
                    class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center italic tracking-wide">
                    Discover more about us</h2>
            </div>
        </div>
        <section class="container px-6">
            <h2>Title for about page</h2>
            <p class="text-[16px] md:text-[20px] font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Esse praesentium voluptatem, ut soluta optio,
                debitis consectetur dignissimos quia ullam distinctio dolore id molestias asperiores at facilis eaque, error
                hic quo!</p>
        </section>
    </div>
</template>