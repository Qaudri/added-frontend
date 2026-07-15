<template>
    <section class="bg-gradient-to-br from-primary/5 to-pink/10 py-16">
        <Container class="grid lg:grid-cols-2 gap-6 items-center">
            <div class="space-y-6">
                <span class="bg-primary/5 py-2 px-4 rounded-full text-primary border border-primary/25 text-sm hanken font-bold">
                    EXPERT SOLUTIONS
                </span>     
                <UiTypographyH1>
                    Our Expertise,
                    <em class="text-primary">Your Growth.</em>
                </UiTypographyH1>
                <UiTypographyP>
                    We provide a wide range of digital marketing and content creation services to help your business reach more customers through strategic design and innovative technology.
                </UiTypographyP>   
                <div class="mt-12 gap-4 flex">
                    <NuxtLink to="/contact" class="rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:scale-105 flex items-center gap-2">
                        Start a Project
                        <Rocket color="white" :stroke-width="2" :size="18" />
                    </NuxtLink>
                    <NuxtLink to="/contact" class="rounded-lg bg-white border border-primary px-8 py-4 text-sm font-semibold text-primary transition-all duration-200 ease-in-out hover:scale-105 flex items-center gap-2">
                        Contact Us
                    </NuxtLink>
                </div>
            </div>
            <div class="relative items-center flex">
                <div class="bg-primary/10 border border-primary/20 rounded-3xl -rotate-6 w-full h-full aspect-square"></div>
                <div class="bg-pink/10 border border-pink/20 rounded-3xl rotate-6 w-full aspect-square absolute z-10"></div>
                <img src="/images/portfolio1.jpg" class="z-20 w-full h-full object-cover aspect-square rounded-3xl absolute" />
            </div>
        </Container>
    </section>

</template>
<script setup>
import { Rocket } from '@lucide/vue';
</script>