<template>
    <section class="py-16">
        <Container class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-4">
                <span class="text-sm text-primary tracking-widest font-bold hanken">GET IN TOUCH</span>
                <UiTypographyH1>
                    Let's craft your
                    <em class="text-primary">digital legacy.</em>
                </UiTypographyH1>
                <UiTypographyP>We're a collective of digital storytellers ready to breathe new life into your brand. Whether it's a bold new identity or a high-performance web experience, we're here for it.</UiTypographyP>
                <div class="space-y-4 mt-4">
                    <NuxtLink to="tel:+2348066600820" class="flex gap-6 items-center p-4 rounded-xl border border-gray-200">
                        <div class="bg-primary rounded-full w-14 h-14 grid place-content-center">
                        <MapPin color="white" :size="30"></MapPin>
                        </div>
                        <div>
                        <span class="text-base text-neutral-500">OFFICE</span>
                        <UiTypographyP class="text-base font-bold text-neutral-700">
                            Added Digital Plaza, Iwo-Ibadan Road, Osun State
                        </UiTypographyP>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="tel:+2348066600820" class="flex gap-6 items-center p-4 rounded-xl border border-gray-200">
                        <div class="bg-pink rounded-full w-14 h-14 grid place-content-center">
                        <AtSign :size="30" class="text-pink-dark"></AtSign>
                        </div>
                        <div>
                        <span class="text-base text-neutral-500">EMAIL</span>
                        <UiTypographyP class="text-base font-bold text-neutral-700">
                            contact@addeddigital.com
                        </UiTypographyP>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="tel:+2348066600820" class="flex gap-6 items-center p-4 rounded-xl border border-gray-200">
                        <div class="bg-amber-800 rounded-full w-14 h-14 grid place-content-center">
                        <Phone color="white" :size="30"></Phone>
                        </div>
                        <div>
                        <span class="text-base text-neutral-500">PHONE</span>
                        <UiTypographyP class="text-base font-bold text-neutral-700">
                            +234 806 660 0820
                        </UiTypographyP>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <FormsContact class="shadow-2xl shadow-black/50" />
        </Container>
    </section>

    <section class="py-32">
        <Container class="space-y-16">
            <div class="flex items-end justify-between flex-wrap">
                <div class="max-w-2xl space-y-2">
                    <span class="text-sm text-pink-dark tracking-widest font-bold hanken">GET IN TOUCH</span>
                    <UiTypographyH2>
                        Where creativity meets strategy.
                    </UiTypographyH2>
                </div>
                <UiTypographyP class="max-w-sm">We maintain a "whatever it takes" attitude to ensure your projects are delivered on time and above expectations.</UiTypographyP>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <img src="/images/culture.jpg" alt="Team collaborating in the office" class="rounded-xl w-full h-full object-cover md:col-span-2 md:row-span-2 overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-auto"/>
                <img src="/images/office.jpg" alt="Workers around a table" class="rounded-xl aspect-[4/3] h-full md:aspect-auto"/>
                <div class="rounded-xl bg-pink flex items-center justify-center text-center p-8 md:aspect-auto text-pink-dark text-lg">
                Breathing new life <br>
                into world-class brands
            </div>
            </div>

        </Container>
    </section>

    <section class="py-32 bg-[#F5F3F3]">
        <Container class="grid lg:grid-cols-3 gap-12">
            <div class="p-8 rounded-xl border border-gray-200 space-y-2">
                <span class="hanken text-3xl text-gray-4--">
                    01
                </span>
                <h4 class="hanken text-base">
                    Honest Experts
                </h4>
                <UiTypographyP class="text-gray-700">
                    We won't bull***t you. We only recommend things that are in the long- term interest of our clients.
                </UiTypographyP>
            </div>
            <div class="p-8 rounded-xl border border-gray-200 space-y-2">
                <span class="hanken text-3xl text-gray-4--">
                    02
                </span>
                <h4 class="hanken text-base">
                    Direct Contact
                </h4>
                <UiTypographyP class="text-gray-700">
                    The designer taking your brief works on your project. No middlemen, no lost communication.
                </UiTypographyP>
            </div>
            <div class="p-8 rounded-xl border border-gray-200 space-y-2">
                <span class="hanken text-3xl text-gray-4--">
                    03
                </span>
                <h4 class="hanken text-base">
                    Multidisciplined
                </h4>
                <UiTypographyP class="text-gray-700">
                   From branding to digital advertising, our highly skilled team is equipped for any challenge.
                </UiTypographyP>
            </div>
        </Container>
    </section>
</template>
<script>
import { MapPin, AtSign, Phone } from '@lucide/vue';
export default {
    components: { MapPin, AtSign, Phone },
}
</script>