<template>
    <section class="relative py-16 lg:pt-32 overflow-hidden">
    <div
        class="absolute right-0 text-primary/10 text-right font-bold text-[15vw] leading-none pointer-events-none select-none"
        style="top: calc(12.5% - 0.625rem)"
        aria-hidden="true"
    >
        PORTFOLIO
    </div>

    <Container class="relative z-10 space-y-6">
        <UiTypographyP class="text-primary tracking-widest hanken font-medium flex gap-4 items-center">
        <span class="bg-pink h-0.5 w-12"></span>
        SELECTED WORK
        </UiTypographyP>
        <UiTypographyH1>
        Digital Solutions <br> <em class="text-primary">Built for Humans</em>
        </UiTypographyH1>
        <UiTypographyP class="max-w-2xl">
        We bridge the gap between complex technology and intuitive user experience. Our portfolio reflects our commitment to clarity, creativity, and conversion-focused design.
        </UiTypographyP>
    </Container>
    </section>

    <Container class="flex gap-4 overflow-x-auto no-scrollbar">
        <button
            v-for="filter in filters"
            :key="filter.name"
            @click="setActive(filter)"
            class="py-2 px-6 rounded-full transition-colors whitespace-nowrap shrink-0"
            :class="filter.active ? 'bg-primary text-white' : 'bg-white border border-gray-300'"
        >
            {{ filter.name }}
        </button>
    </Container>

    <section class="py-16">
        <Container class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 items-start">
            <UiCardsProjects
                v-for="project in projects"
                :key="project.title"
                :project="project"
                :aspect="project.aspect"
                :class="project.span"
                @open="openModal"
            />
        </Container>
    </section>

    <Container class="py-16">
        <div class="relative overflow-hidden bg-primary p-8 md:p-12 lg:p-16 xl:p-24 rounded-3xl flex items-center justify-between flex-wrap gap-8">
            <MessagesSquare
                color="white"
                class="h-[250px] w-[250px] opacity-10 absolute -top-8 -right-8 pointer-events-none"
            />

            <div class="relative z-10 space-y-4 text-white max-w-xl">
                <UiTypographyH2>
                    Have a project in mind? <br>
                    <em class="text-pink">Let's build it together.</em>
                </UiTypographyH2>
                <UiTypographyP>
                    We're currently accepting new projects and would love to hear about yours.
                    Get in touch to schedule a free consultation.
                </UiTypographyP>
            </div>

            <NuxtLink
                to="/contact"
                class="relative z-10 bg-pink text-primary rounded-full py-4 px-8 gap-4 flex items-center hover:-translate-y-2 duration-200 ease-in-out"
            >
                Get in Touch
                <ArrowRight class="text-primary" />
            </NuxtLink>
        </div>
    </Container>
</template>
<script>
import { MessagesSquare, ArrowRight } from '@lucide/vue';
export default {
    components: { MessagesSquare, ArrowRight },
    data(){
        return {
            filters: [
                { name: 'All Work', active: true },
                { name: 'Branding', active: false },
                { name: 'UI/UX Design', active: false },
                { name: 'Packaging', active: false },
                { name: 'Digital Marketing', active: false },
            ],
            projects: [
                { title: 'Strategic Digital Platform', description: 'Enterprise solutions for global fintech leaders.', image: '/images/portfolio/01.jpg', span: 'lg:col-span-4', aspect: 'aspect-[4/3] lg:aspect-[16/9]' },
                { title: 'The Modern Monolith', description: 'Minimalist branding for architectural firms.', image: '/images/portfolio/02.jpg', span: 'lg:col-span-2', aspect: 'aspect-[4/3] lg:aspect-square' },
                { title: 'Tech Lifestyle Pack', description: 'Packaging & Identity for consumer electronics.', image: '/images/portfolio/03.jpg', span: 'lg:col-span-3', aspect: 'aspect-[4/3]' },
                { title: 'Creative Agency Portal', description: 'Web development and motion design integration.', image: '/images/portfolio/04.jpg', span: 'lg:col-span-3', aspect: 'aspect-[4/3]' },
                { title: 'Visual Rhythms', description: 'Abstract branding concepts for music platforms.', image: '/images/portfolio/05.jpg', span: 'lg:col-span-2', aspect: 'aspect-[4/3] lg:aspect-square' },
                { title: 'Interactive Experiences', description: 'Digital marketing campaigns for global brands.', image: '/images/portfolio/06.jpg', span: 'lg:col-span-4', aspect: 'aspect-[4/3] lg:aspect-[16/9]' },
            ]
        }
    },
    methods: {
        setActive(selected) {
            this.filters.forEach(filter => {
                filter.active = filter === selected
            })
        }
    }
}
</script>
