<script setup>
import { useHead } from '@vueuse/head';
import ImageCarousel from '../components/ImageCarousel.vue'

const studioImages = ['/studio/DSC04725-2.jpg', '/studio/DSC04687-2.jpg', '/studio/DSC04700.jpg', '/studio/DSC04712.jpg', '/studio/DSC04717.jpg', '/studio/DSC04742.jpg']
const clusterImages = ['/cluster/DSC01935.jpg', '/cluster/DSC01905-2.jpg', '/cluster/DSC01922-2.jpg', '/cluster/DSC01940-2.jpg']

useHead({
    title: 'Element The Quarter | Reserve your new luxury student accomodation in Liverpool city center',
    meta: [
        {
            name: 'description',
            content: 'Discover The Element Quarter - Luxury student accommodation at the heart of Liverpool\'s city center. Limited rooms available for clearing today!"'
        }
    ]
})

</script>

<template>
    <div class="flex flex-col gap-16">
        <div class="w-full">
            <figure class="relative flex justify-center" aria-label="Home page banner Image" tabindex="0">
                <picture class="w-full">
                    <source media="(min-width: 768px)" srcset="/hero/banner-lg.jpg" />
                    <img src="/hero/banner-sm.jpg"
                        class="aspect-[16/9] w-full h-auto max-w-full max-h-[816px] object-cover min-h-[50vh] brightness-50"
                        alt="Element The Quarter hero banner - rooftop garden" />
                </picture>
                <div class="absolute text-white top-0 flex flex-col w-auto h-full justify-center px-6 md:px-6"
                    aria-label="Homepage banner overlay container" tabindex="0">
                    <h1 id="title" tabindex="0"
                        class="font-freight text-[42px] md:text-[60px] lg:text-[72px] italic text-center tracking-wide">
                        Element The
                        Quarter
                    </h1>
                    <hr id="title-divide" class="border w-full border-[#fff]" />
                    <h2 id="subtitle"
                        class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center italic tracking-wide"
                        tabindex="0">
                        Liverpools
                        newest
                        student
                        accomodation</h2>
                </div>
            </figure>
            <article class="bg-[#d9e3da] py-12 md:py-20" tabindex="0" aria-label="The Element Quarter blurb">
                <div class="container mx-auto md:w-3/4 w-full flex flex-col gap-4 md:gap-6 px-6">
                    <div class="font-poppins flex flex-col gap-4 md:gap-6 text-[16px] md:text-[20px]">
                        <p tabindex="0">Welcome to Element - The Quarter, Liverpool's brand-new eco-friendly accommodation
                            building, by Legacie. Located at the heart of the vibrant city centre! Designed with the needs
                            of modern students in mind, our prime location puts you within easy reach of university
                            buildings, libraries, and all the excitement the city has to offer. </p>
                        <p tabindex="0">
                            Say goodbye to long commutes and hello to convenience and connectivity. Not only will you be
                            immersed in the bustling urban atmosphere, but you'll also enjoy the advantage of having our
                            very own on-site gym, promoting a healthy and active lifestyle. Embrace a dynamic living
                            experience where academic excellence meets urban living, as we provide a comfortable, secure,
                            and inspiring environment for you to thrive.
                        </p>

                    </div>
                </div>
            </article>
        </div>

        <section class="container mx-auto md:w-3/4 w-full flex flex-col gap-4 md:gap-6 px-6">
            <h2 class="font-freight text-[36px] md:text-[42px] lg:text-[50px] text-center italic tracking-wide"
                tabindex="0">
                Why Element The Quarter</h2>
            <p class="text-[16px] md:text-[20px] font-poppins">With state of the art, hotel style facilities and a prime
                location for all Universities in Liverpool, Element – The Quarter is set to be Liverpool’s most desired
                student accommodation yet! Set just 350 metres from the Royal Liverpool University Hospital and boasting
                unbeatable facilities such as an on-site gym, cinema room, rooftop terrace and so much more, Element – The
                Quarter has everything the modern student could wish for, all whilst being just a short walk from the city
                centre.</p>
        </section>

        <section class="flex flex-col gap-8 relative">
            <div id="room-wrapper" class="before:w-full before:py-10 before:absolute before:bg-[#faf0e6]">
                <div class="py-10">
                    <div class="lg:grid lg:grid-cols-2 flex flex-col gap-4 container mx-auto lg:py-10">
                        <h2 class="text-[36px] font-freight justify-center lg:hidden flex z-10">Private Studio</h2>
                        <div>
                            <ImageCarousel :images="studioImages" />
                        </div>
                        <aside
                            class="flex flex-col gap-3 order-1 lg:order-2 font-poppins z-10 px-6 py-10 lg:py-0 text-[16px] items-center"
                            aria-label="Studio information" tabindex="0">
                            <h2 class="text-[36px] font-freight hidden lg:flex">Private Studio</h2>
                            <p class="pb-4"><strong>Available from 15th September 2023.</strong></p>
                            <p>Introducing our brand new, state-of-the-art studio apartments, designed especially for
                                eco-conscious students. Experience the perfect blend of modern living and sustainable
                                features.</p>
                            <p>Our perfectly crafted studio apartments offer the perfect sanctuary for students seeking
                                comfort and convenience. Step into your private oasis, featuring a cosy living area, fully
                                equipped kitchenette and stylish bathroom, with laundry facilities also on-site - everything
                                you need for a comfortable lifestyle.</p>
                            <ul group="features" class="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 md:py-6">
                                <li class="flex gap-3 items-center"><img src="/icons/credit-card.svg" height="24" width="24"
                                        aria-hidden="true" />All bills included</li>
                                <li class="flex gap-3 items-center"><img src="/icons/wifi.svg" height="24" width="24"
                                        aria-hidden="true" />Free WiFi</li>
                                <li class="flex gap-3 items-center"><img src="/icons/user.svg" height="24" width="24"
                                        aria-hidden="true" />Concierge</li>
                                <li class="flex gap-3 items-center"><img src="/icons/shield.svg" height="24" width="24"
                                        aria-hidden="true" />24-hour security</li>
                                <li class="flex gap-3 items-center"><img src="/icons/truck.svg" height="24" width="24"
                                        aria-hidden="true" />On-site parking</li>
                                <li class="flex gap-3 items-center"><img src="/icons/monitor.svg" height="24" width="24"
                                        aria-hidden="true" />Smart TV included</li>
                            </ul>
                            <p class="text-center">Contact us to book a viewing on <a href="tel:+44(0)1512079990"
                                    class="underline"
                                    aria-label="Contact us through phone on +44(0)1512079990">01512079990</a></p>
                            <p class="uppercase">or</p>
                            <a class="flex" href="https://www.rightmove.co.uk/properties/137836298#/?channel=STU_LET"
                                aria-label="View Studio on Rightmove" target="_blank">
                                <button class="rounded-full py-3 px-5 bg-[#050A30] text-white hover:underline">Enquire
                                    now</button>
                            </a>
                        </aside>
                    </div>
                    <div class="lg:grid lg:grid-cols-2 flex flex-col gap-4 container mx-auto lg:py-10">
                        <h2 class="text-[36px] font-freight justify-center lg:hidden flex z-10">Cluster Apartment</h2>
                        <aside
                            class="flex flex-col gap-3 order-2 lg:order-1 font-poppins z-10 px-6 py-10 lg:py-0 text-[16px] items-center"
                            aria-label="Studio information" tabindex="0">
                            <h2 class="text-[36px] font-freight hidden lg:flex">Cluster Apartment</h2>
                            <p class="pb-4"><strong>Available from 15th September 2023.</strong></p>
                            <p>Introducing our brand new, cutting-edge shared cluster apartments, designed for students
                                wanting a more social approach to living. Experience the perfect blend of modern communal
                                leaving and sustainable features, all within your reach.</p>
                            <p>Here, you and your friends can create lasting memories together. Each shared cluster
                                apartment offers spacious and well-designed living areas, fully equipped kitchens, stylish
                                bedrooms and 5 private en-suite bedrooms - the ultimate combination of comfort and
                                camaraderie.</p>
                            <ul group="features" class="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 md:py-6">
                                <li class="flex gap-3 items-center"><img src="/icons/credit-card.svg" height="24" width="24"
                                        aria-hidden="true" />All bills included</li>
                                <li class="flex gap-3 items-center"><img src="/icons/wifi.svg" height="24" width="24"
                                        aria-hidden="true" />Free WiFi</li>
                                <li class="flex gap-3 items-center"><img src="/icons/user.svg" height="24" width="24"
                                        aria-hidden="true" />Concierge</li>
                                <li class="flex gap-3 items-center"><img src="/icons/shield.svg" height="24" width="24"
                                        aria-hidden="true" />24-hour security</li>
                                <li class="flex gap-3 items-center"><img src="/icons/truck.svg" height="24" width="24"
                                        aria-hidden="true" />On-site parking</li>
                                <li class="flex gap-3 items-center"><img src="/icons/monitor.svg" height="24" width="24"
                                        aria-hidden="true" />Smart TV included</li>
                            </ul>
                            <p class="text-center">Contact us to book a viewing on <a href="tel:+44(0)1512079990"
                                    class="underline"
                                    aria-label="Contact us through phone on +44(0)1512079990">01512079990</a></p>
                            <p class="uppercase">or</p>
                            <a class="flex" href="https://www.rightmove.co.uk/properties/137886077#/?channel=STU_LET"
                                aria-label="View Studio on Rightmove" target="_blank">
                                <button class="rounded-full py-3 px-5 bg-[#050A30] text-white hover:underline">Enquire
                                    now</button>
                            </a>
                        </aside>
                        <div class="order-1 lg:order-2">
                            <ImageCarousel :images="clusterImages" :papMessage="true" />
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 flex flex-col gap-4 container mx-auto lg:pt-10">
                        <h2 class="text-[36px] font-freight justify-center md:hidden flex z-10">The Facilities</h2>
                        <div>
                            <ImageCarousel :images="studioImages" />
                        </div>
                        <aside
                            class="flex flex-col gap-3 order-1 lg:order-2 font-poppins z-10 px-6 py-10 lg:py-0 text-[16px] items-center"
                            aria-label="Studio information" tabindex="0">
                            <h2 class="text-[36px] font-freight hidden lg:flex">The Facilities</h2>
                            <ul group="facilities" class="flex gap-4 flex-col py-6 self-start">
                                <li class="flex gap-3"><img src="/icons/gym.svg" height="32" width="32"
                                        aria-hidden="true" />Stay active in the on-site gym
                                </li>
                                <li class="flex gap-3"><img src="/icons/cinema.svg" height="32" width="32"
                                        aria-hidden="true" />Movie-nights redefined in our luxurious cinema room.</li>
                                <li class="flex gap-3"><img src="/icons/sofa.svg" height="32" width="32"
                                        aria-hidden="true" />Connect and unwind in the common room.</li>
                                <li class="flex gap-3"><img src="/icons/study.svg" height="32" width="32"
                                        aria-hidden="true" />Our dedicated study areas provides the ideal space for group
                                    projects, collaborative learning and group study sessions.</li>
                                <li class="flex gap-3"><img src="/icons/sunset.svg" height="32" width="32"
                                        aria-hidden="true" />Our rooftop terrace is not only a social sanctuary, but also a
                                    hub of activity with spectacular views of Liverpool's skyline.</li>
                            </ul>
                            <p class="text-center">Contact us to book a viewing on <a href="tel:+44(0)1512079990"
                                    class="underline"
                                    aria-label="Contact us through phone on +44(0)1512079990">01512079990</a></p>
                            <p class="uppercase">or</p>
                            <a class="flex" href="https://www.rightmove.co.uk/properties/137836298#/?channel=STU_LET"
                                aria-label="View Studio on Rightmove" target="_blank">
                                <button class="rounded-full py-3 px-5 bg-[#050A30] text-white hover:underline">Enquire
                                    now</button>
                            </a>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full md:py-20 py-12 bg-[#d9e3da]">
            <div class="container mx-auto px-6">
                <div class="lg:flex lg:justify-evenly grid gap-10 w-full mx-auto">
                    <div class="border rounded-lg p-8 shadow flex flex-col gap-4 bg-[#f5f5f5]">
                        <q class="font-freight text-[24px] italic tracking-wide lg:text-[32px]">
                            The apartment is very stylish and practical. The building has everything you need and even more,
                            such as parking, gym, etc. Very nice and helpful concierges. Management and service at the
                            highest level. I can recommend them.
                        </q>
                        <cite class="text-right font-poppins text-[14px] not-italic tracking-normal">- Oleksandr</cite>
                    </div>

                    <div class="border rounded-lg p-8 shadow flex flex-col gap-4 bg-[#f5f5f5]">
                        <q class="font-freight text-[24px] italic tracking-wide lg:text-[32px]">
                            Lovely, modern apartments with decent sized en suites. The communal areas are always super clean
                            and the staff are very friendly and accommodating. The gym on the top floor is a fantastic
                            bonus!
                        </q>
                        <cite class="text-right font-poppins text-[14px] not-italic tracking-normal">- Katie</cite>
                    </div>

                    <div class="border rounded-lg p-8 shadow flex flex-col gap-4 bg-[#f5f5f5]">
                        <q class="font-freight text-[24px] italic tracking-wide lg:text-[32px]">
                            I have been a tenant with Legacie several times since 2019 and they have always been fantastic.
                            The staff have always been welcoming and friendly, and very quick to fix any issues relating to
                            our apartment.
                        </q>
                        <cite class="text-right font-poppins text-[14px] not-italic tracking-normal">- Laura</cite>
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto mb-16">
            <div class="grid md:grid-cols-2 md:gap-6 gap-8 px-6">
                <div class="flex justify-center items-center flex-col gap-4" group="location">
                    <h2 class="font-freight text-[36px]">Location</h2>
                    <ul class="font-poppins text-[18px] flex flex-col gap-2">
                        <li class="flex gap-2"><img aria-hidden="true" src="/icons/graduation.svg" height="24"
                                width="24" />Ideal location for
                            University buildings</li>
                        <li class="flex gap-2"><img aria-hidden="true" src="/icons/city.svg" height="24" width="24" />City
                            Center location
                        </li>
                        <li class="flex gap-2"><img aria-hidden="true" src="/icons/train.svg" height="24"
                                width="24" />Walking distance to
                            Liverpool Lime Street station</li>
                        <li class="flex gap-2"><img aria-hidden="true" src="/icons/shopping-cart.svg" height="24"
                                width="24" />Less than 10
                            minutes to Tesco &amp; Lidl</li>
                        <li class="flex gap-2"><img aria-hidden="true" src="/icons/hospital.svg" height="24" width="24" />7
                            minute walk to
                            Royal Liverpool University Hospital</li>
                    </ul>
                </div>
                <div tabindex="0" aria-label="The Element quarter student accomodation location - Google Maps">
                    <a href="https://www.google.com/maps?rlz=1C5CHFA_enGB923GB923&output=search&q=the+element+quarter+liverpool&source=lnms&entry=mc&sa=X&ved=2ahUKEwiG-tDEtrSAAxUNVUEAHXyKBuIQ0pQJegQIDRAB"
                        class="sr-only" aria-label="open Google Maps to see The Element Quarter location" targt="_blank" />
                    <iframe class="rounded-lg shadow" title="Google maps - Element The Quarter"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.0670073078822!2d-2.9651933228248524!3d53.41362776968672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21e393e1b963%3A0x7ef05b0c42a706a0!2sElement%20The%20Quarter!5e0!3m2!1sen!2suk!4v1690121352280!5m2!1sen!2suk"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
#room-wrapper::before {
    height: calc(100% - 10vw);
}
</style>