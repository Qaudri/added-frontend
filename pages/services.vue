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
    <section class="py-32">
        <Container class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <span class="text-sm text-primary hanken tracking-widest">
                    CORE IDENTITY
                </span>
                <UiTypographyH2 class="mt-2 mb-6">
                    Branding & Positioning That <span class="text-primary">Commands Authority</span>
                </UiTypographyH2>
                <UiTypographyP>
                    Added helps businesses define their unique identity and market position in a crowded digital landscape. We don't just design logos; we build cohesive brand ecosystems that communicate your values and vision at every touchpoint.
                </UiTypographyP>
                <ul class="grid md:grid-cols-2 gap-4 mt-6">
                    <li class="col-span-2 mb-4 flex items-center gap-2 font-semibold hanken text-base">
                        <ListChecks :size="18" class="mt-0.5 shrink-0 text-primary" :stroke-width="3" />
                        <span>What your business gets</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-primary" />
                        <span>Increased brand recognition & awareness</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-primary" />
                        <span>Built-in consumer trust & loyalty</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-primary" />
                        <span>Ability to command premium pricing</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-primary" />
                        <span>Clear differentiation from competitors</span>
                    </li>
                </ul>
            </div>
            <img src="/images/portfolio3.jpg" class="w-full object-cover aspect-[4/3] rounded-3xl" />
        </Container>
    </section>
    <section class="py-32 bg-[#F8F9FA]">
        <Container class="grid lg:grid-cols-2 gap-16 items-center">
            <img src="/images/marketing.jpg" class="w-full object-cover aspect-[4/3] rounded-3xl" />
            <div>
                <span class="text-sm text-secondary hanken tracking-widest">
                    GROWTH ENGINES
                </span>
                <UiTypographyH2 class="mt-2 mb-6">
                    Strategic Marketing That  <span class="text-secondary">Drives Conversion</span>
                </UiTypographyH2>
                <UiTypographyP>
                    We focus on running social media ads that convert, high-quality content creation, and full-scale social media management. Our data-driven approach ensures your message reaches the right audience at the right time on the right platforms.
                </UiTypographyP>
                <ul class="grid md:grid-cols-2 gap-4 mt-6">
                    <li class="col-span-2 mb-4 flex items-center gap-2 font-semibold hanken text-base">
                        <TrendingUp :size="18" class="mt-0.5 shrink-0 text-secondary" :stroke-width="3" />
                        <span>What your business gets</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-secondary" />
                        <span>Consistent, high-quality lead generation</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-secondary" />
                        <span>Rapid & sustainable audience growth</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-secondary" />
                        <span>Measurable and optimized ROI</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-secondary" />
                        <span>Enhanced social proof & engagement</span>
                    </li>
                </ul>
            </div>
        </Container>
    </section>
    <section class="py-32">
        <Container class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <span class="text-sm text-[#923D8B] hanken tracking-widest">
                    DIGITAL FOUNDATION
                </span>
                <UiTypographyH2 class="mt-2 mb-6">
                    High-Performance <span class="text-[#923D8B]">Digital Experiences </span>
                </UiTypographyH2>
                <UiTypographyP>
                    Added builds high-performing, responsive websites that serve as your brand's digital headquarters. We combine cutting-edge development with user-centric design to create seamless experiences that guide visitors through a curated journey.
                </UiTypographyP>
                <ul class="grid md:grid-cols-2 gap-4 mt-6">
                    <li class="col-span-2 mb-4 flex items-center gap-2 font-semibold hanken text-base">
                        <LaptopMinimal :size="18" class="mt-0.5 shrink-0 text-[#923D8B]" :stroke-width="3" />
                        <span>Business Impact</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-[#923D8B]" />
                        <span>A professional home that converts visitors</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-[#923D8B]" />
                        <span>Scalable architecture for future growth</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-[#923D8B]" />
                        <span>Optimized speed & mobile accessibility</span>
                    </li>
                    <li class="grid grid-cols-[18px_1fr] items-start gap-x-3 text-base leading-7">
                        <CircleCheckBig :size="18" class="mt-1 shrink-0 text-[#923D8B]" />
                        <span>Improved search engine rankings</span>
                    </li>
                </ul>
            </div>
            <img src="/images/digital.jpg" class="w-full object-cover aspect-[4/3] rounded-3xl" />
        </Container>
    </section>
    <section class="py-32 bg-[#F8F9FA]">
        <Container class="space-y-16">
            <div class="flex items-center justify-between gap-6">
                <div>
                    <span class="text-sm text-primary hanken tracking-widest">
                        HOW WE WORK
                    </span>
                    <UiTypographyH2>
                        Streamlined Path to <span class="text-primary">Digital Success</span>
                    </UiTypographyH2>
                </div>
                <div class="bg-primary/20 w-0.5 h-16 hidden lg:block"></div>    
                <UiTypographyP>
                    We follow a rigorous yet flexible creative process that ensures your project is delivered on time, within budget, and way above expectations.
                </UiTypographyP>
            </div>
            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                <div class="space-y-4">
                    <span class="bg-white border border-gray-200 rounded-xl h-16 w-16 grid place-content-center text-primary shadow-2xl hanken font-semibold text-2xl">01</span>
                    <h4 class="hanken font-medium text-xl">Discussion</h4>
                    <UiTypographyP class="text-neutral-500">
                        We dive deep into your brand's DNA,goals, and target audience to build asolid brief.
                    </UiTypographyP>
                </div>
                <div class="space-y-4 mt-12">
                    <span class="bg-white border border-gray-200 rounded-xl h-16 w-16 grid place-content-center text-[#923D8B] shadow-2xl hanken font-semibold text-2xl">02</span>
                    <h4 class="hanken font-medium text-xl">Ideas & Concepts</h4>
                    <UiTypographyP class="text-neutral-500">
                        Exploring multiple creative directions and strategies to find the perfect fit for your vision.
                    </UiTypographyP>
                </div>
                <div class="space-y-4 lg:mt-24">
                    <span class="bg-white border border-gray-200 rounded-xl h-16 w-16 grid place-content-center text-primary shadow-2xl hanken font-semibold text-2xl">03</span>
                    <h4 class="hanken font-medium text-xl">Design</h4>
                    <UiTypographyP class="text-neutral-500">
                        The magic happens here—crafting visuals, interfaces, and experiences that resonate.
                    </UiTypographyP>
                </div>
                <div class="space-y-4 md:mt-12 lg:mt-24">
                    <span class="bg-primary border border-gray-200 rounded-xl h-16 w-16 grid place-content-center text-white shadow-2xl hanken font-semibold text-2xl">04</span>
                    <h4 class="hanken font-medium text-xl">Development</h4>
                    <UiTypographyP class="text-neutral-500">
                        The magic happens here—crafting visuals, interfaces, and experiences that resonate.
                    </UiTypographyP>
                </div>

            </div>
        </Container>
    </section>
</template>
<script setup>
import { Rocket, ListChecks, CircleCheckBig, TrendingUp, LaptopMinimal } from '@lucide/vue';
</script>