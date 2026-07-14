<template>
    <section class="py-16">
        <Container class="grid lg:grid-cols-2 lg:gap-24 gap-16 items-center">
            <div class="space-y-8">
                <span class="bg-primary/5 py-2 px-4 rounded-full text-primary border border-primary/25 text-sm hanken font-bold flex items-center gap-3 w-fit">
                    <div class="h-2 w-2 rounded-full bg-secondary"></div>
                    NOW ENROLLING FOR {{new Date().getFullYear()}}
                </span>
                <UiTypographyH1>
                    Acquire <br/>
                    <span class="bg-[url('/images/underline.svg')] bg-no-repeat bg-bottom bg-contain pb-2 inline-block text-secondary">
                    21st Century
                    </span> <br/>
                    Skills
                </UiTypographyH1>
                <UiTypographyP>
                    Empowering creative minds with industry-leading digital skills. From pixels to code, we bridge the gap between passion and professional expertise through immersive learning experiences.
                </UiTypographyP>
                <div class="flex gap-5 items-center">
                    <NuxtLink class="bg-primary text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors">
                        Start Learning
                        <ArrowRight :size="20" />
                    </NuxtLink>
                    <div class="flex gap-2 p-1 pr-4 border border-gray-300 text-semibold rounded-full items-center">
                        <img src="/images/student-trust.png" alt="Student Trust Factoid" class="w-24" />
                        Trusted by Students
                    </div>
                </div>
            </div>
            <div class="bg-cover bg-center lg:h-[600px] rounded-3xl relative bg-[url('/images/academy.jpg')]">
                <article class="bg-white p-3 rounded-2xl gap-3 w-fit relative top-10 left-10 flex">
                    <div class="bg-secondary/10 w-10 h-10 rounded-lg place-content-center grid">
                        <Brush :size="26" class="text-secondary" />
                    </div>
                    <div>
                        <p class="text-sm font-bold">Graphic Design</p>
                        <p class="text-sm">Master Visuals</p>
                    </div>
                </article>
                <article class="bg-white p-3 rounded-2xl gap-3 w-fit absolute bottom-10 right-10 flex">
                    <div class="bg-primary/10 w-10 h-10 rounded-lg place-content-center grid">
                        <Brush :size="26" class="text-primary" />
                    </div>
                    <div>
                        <p class="text-sm font-bold">Web Dev</p>
                        <p class="text-sm">Full-Stack Track</p>
                    </div>
                </article>
            </div>
        </Container>
    </section>
    <section class="py-32">
        <Container class="space-y-12">
            <div class="max-w-3xl mx-auto text-center space-y-6">
                <UiTypographyH2>
                    Our Specialized Tracks
                </UiTypographyH2>
                <UiTypographyP>
                    We offer intensive, project-based training designed to equip you with the technical prowess and creative thinking required by modern employers.
                </UiTypographyP>
            </div>

            <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <UiCardsCourses
                    v-for="course in courses"
                    :key="course.title"
                    :icon="course.icon"
                    :color="course.color"
                    :featured="course.featured"
                    :title="course.title"
                    :description="course.description"
                    :badge="course.badge"
                    :href="course.href"
                />

                <li
                    class="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 flex flex-col items-center text-center"
                    >
                    <div class="w-14 h-14 rounded-full bg-white shadow-sm grid place-content-center mb-6">
                        <Compass :size="24" class="text-primary" />
                    </div>
                    <h3 class="text-xl font-bold hanken mb-2">Want a custom path?</h3>
                    <UiTypographyP class="mb-6 text-gray-600">
                        Speak with our career advisors to build a personalized learning roadmap.
                    </UiTypographyP>
                    <NuxtLink
                        to="/consult"
                        class="border border-primary text-primary font-semibold rounded-lg px-6 py-3 hover:bg-primary hover:text-white transition-colors"
                    >
                        Consult an Expert
                    </NuxtLink>
                </li>
            </ul>
        </Container>
    </section>
    <Container>
        <div class="bg-primary rounded-[32px] grid lg:grid-cols-2 gap-8 items-center p-4 shadow-lg">
            <div class="px-12 space-y-6 text-gray-200 py-12 lg:py-0">
                <h3 class="hanken font-bold text-5xl">
                    Secure Your Spot in the Next Cohort
                </h3>
                <UiTypographyP>
                    Ready to transform your future? Fill out the form to receive the academy prospectus and interview schedule.
                </UiTypographyP>
                <ul class="mt-2 space-y-4">
                    <li class="flex items-center gap-4 font-semibold text-base">
                        <div class="bg-white/20 h-8 w-8 rounded-full grid place-content-center">
                            <CircleCheckBig :size="20" class="text-white" />
                        </div>
                        Hands-on project experience
                    </li>
                    <li class="flex items-center gap-4 font-semibold text-base">
                        <div class="bg-white/20 h-8 w-8 rounded-full grid place-content-center">
                            <CircleCheckBig :size="20" class="text-white" />
                        </div>
                        Industry mentorship & networking
                    </li>
                    <li class="flex items-center gap-4 font-semibold text-base">
                        <div class="bg-white/20 h-8 w-8 rounded-full grid place-content-center">
                            <CircleCheckBig :size="20" class="text-white" />
                        </div>
                        Certification upon completion
                    </li>
                </ul>
            </div>
            <FormsCohort/>
        </div>
    </Container>
    <section class="py-16">
        <Container class="grid lg:grid-cols-3 gap-8">
            <div class="border border-gray-200 rounded-2xl p-8 flex gap-6">
                <div class="w-12 h-12 shrink-0 rounded-xl bg-primary/10 grid place-content-center">
                    <MapPin class="w-6 h-6 shrink-0 text-primary" />
                </div>
                <div class="space-y-2">
                    <h4 class="font-bold text-lg mb-2">Visit Our Campus</h4>
                    <p class="text-gray-600">
                        Sidolink Filling Station, along Oyo Road Iwo, Osun State, Nigeria.
                    </p>
                    <NuxtLink class="text-primary font-semibold underline mt-5 block">
                       Open in Google Maps
                    </NuxtLink>
                </div>
            </div>
            <div class="border border-gray-200 rounded-2xl p-8 flex gap-6">
                <div class="w-12 h-12 shrink-0 rounded-xl bg-secondary/10 grid place-content-center">
                    <Smartphone class="w-6 h-6 shrink-0 text-secondary" />
                </div>
                <div class="space-y-2">
                    <h4 class="font-bold text-lg mb-2">Call or WhatsApp</h4>
                    <p class="text-gray-600">
                        09036049992 <br/>
                        08066600820
                    </p>
                    <p class="text-sm text-gray-400 mt-5">
                       Mon - Sat: 9:00 AM - 5:00 PM
                    </p>
                </div>
            </div>
            <div class="bg-neutral-900 rounded-2xl p-8 space-y-4">
                <h4 class="font-bold text-xl text-white">Have Questions?</h4>
                <p class="text-neutral-400">
                    Our admissions team is here to help you choose the right path.
                </p>
                <NuxtLink class="text-white bg-neutral-800 border border-neutral-700 rounded-xl py-3 font-semibold block text-center mt-5">
                    Chat With Us
                </NuxtLink>
            </div>
        </Container>
    </section>
</template>
<script setup>
import {
  Brush,
  ArrowRight,
  MonitorSmartphone,
  Code2,
  Megaphone,
  Store,
  Compass,
  CircleCheckBig,
  MapPin,
  Smartphone,
} from '@lucide/vue';
 
const courses = [
  {
    icon: Brush,
    color: 'orange',
    title: 'Graphic Design',
    description:
      'Master visual communication, typography, and brand identity using industry standards like Adobe Suite and Canva.',
    badge: 'BEGINNER TO PRO',
    href: '/courses/graphic-design',
  },
  {
    icon: MonitorSmartphone,
    color: 'purple',
    title: 'UI/UX Design',
    description:
      'Learn user research, wireframing, and creating high-fidelity interactive prototypes with Figma and Adobe XD.',
    badge: 'MOST POPULAR',
    href: '/courses/ui-ux-design',
  },
  {
    icon: Code2,
    color: 'teal',
    featured: true,
    title: 'Web Design & Dev',
    description:
      'A complete journey from HTML/CSS to building complex dynamic web applications with React and Node.js.',
    badge: 'FULL-STACK TRACK',
    href: '/courses/web-design-dev',
  },
  {
    icon: Megaphone,
    color: 'brown',
    title: 'Digital Marketing',
    description:
      'Master SEO, social media management, content strategy, and high-conversion paid advertising campaigns.',
    badge: 'BUSINESS GROWTH',
    href: '/courses/digital-marketing',
  },
  {
    icon: Store,
    color: 'mint',
    title: 'E-commerce & KDP',
    description:
      'Unlock revenue streams through Amazon KDP, drop-shipping, and building your own digital marketplace.',
    badge: 'INCOME GENERATION',
    href: '/courses/ecommerce-kdp',
  },
]
</script>