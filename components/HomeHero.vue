<script setup lang="ts">
type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface FloatingBadge {
  id: string
  label: string
  tone: 'branding' | 'olive' | 'purple' | 'outline'
  pillCorner: Corner
  arrowCorner: Corner
  arrowRotate: string
  arrowColor: string
  delay: string
}

const badgeToneClasses: Record<FloatingBadge['tone'], string> = {
  branding: 'border border-primary-light/25 bg-[#4ADE8033]',
  olive: 'border border-orange-500/50 bg-orange-500/30', //Ui
  purple: 'border border-[#FF9CF240] bg-[#FF9CF240]', //web
  outline: 'border border-white/40 bg-[#FFFFFF30]',
}

const badgePositionClasses: Record<Corner, string> = {
  'top-left': '-top-[5.5rem] left-[0rem]',
  'top-right': '-top-[5.6rem] right-[-1rem]',
  'bottom-left': '-bottom-[9rem] left-[-2.5rem]',
  'bottom-right': '-bottom-[12rem] right-[-1rem]',
}

const arrowPositionClasses: Record<Corner, string> = {
  'top-left': '-top-3.5 left-[-1.5rem]',
  'top-right': '-top-1 right-[-1.6rem]', //SEO
  'bottom-left': '-bottom-2 left-[-1.8rem]', //Ui Ux
  'bottom-right': '-bottom-2 right-[-1.5rem]', //Branding
}

const badges: FloatingBadge[] = [
  {
    id: 'branding',
    label: 'Branding',
    tone: 'branding',
    pillCorner: 'top-left',
    arrowCorner: 'bottom-right',
    arrowRotate: '170deg',
    arrowColor: '#6ee7a8',
    delay: '0s',
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Design',
    tone: 'outline',
    pillCorner: 'top-right',
    arrowCorner: 'bottom-left',
    arrowRotate: '275deg',
    arrowColor: '#ffffff',
    delay: '0.6s',
  },
  {
    id: 'seo',
    label: 'SEO Strategy',
    tone: 'olive',
    pillCorner: 'bottom-left',
    arrowCorner: 'top-right',
    arrowRotate: '100deg',
    arrowColor: '#f2994a',
    delay: '1.1s',
  },
  {
    id: 'web-dev',
    label: 'Web Development',
    tone: 'purple',
    pillCorner: 'bottom-right',
    arrowCorner: 'top-left',
    arrowRotate: '-10deg',
    arrowColor: '#e879f9',
    delay: '0.3s',
  },
]
</script>

<template>
  <section class="relative isolate w-full overflow-hidden bg-[#0f6b5e] text-white border-t-white/25 border-t">
    <div class="absolute inset-0 -z-[3] bg-[#058182]" />
    <img src="/images/dotted-grid.svg" alt="" aria-hidden="true" class="pointer-events-none absolute inset-0 -z-[2] h-full w-full object-cover">

    <img src="/images/ripple-line.svg" alt="" aria-hidden="true" class="pointer-events-none absolute bottom-[-2%] left-0 right-0 z-[0] h-auto w-full">

    <Container class="relative z-[10] mt-20 grid gap-6 text-center">
      <span class="mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-white/20 px-2 py-1 text-[11px] uppercase tracking-[0.2em]">
        <strong class="text-[#4ADE80]">12+</strong> YEARS OF EXPERIENCE
      </span>

      <div class="relative mx-auto max-w-5xl w-full">
        <UiTypographyH1 class="mx-auto -mt-5 max-w-4xl">
          We build brands — <em>That stands out.</em>
        </UiTypographyH1>

        <div
          v-for="badge in badges"
          :key="badge.id"
          class="absolute z-20 hidden whitespace-nowrap rounded-full px-7 py-3.5 text-[1.05rem] text-white shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl lg:block motion-safe:animate-float motion-reduce:animate-none"
          :class="[badgeToneClasses[badge.tone], badgePositionClasses[badge.pillCorner]]"
          :style="{ animationDelay: badge.delay }"
        >
          {{ badge.label }}

          <svg
            class="pointer-events-none absolute z-[1] h-[26px] w-[26px]"
            :class="arrowPositionClasses[badge.arrowCorner]"
            :style="{ transform: `rotate(${badge.arrowRotate})` }"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 3L21 10L12 12L10 21L3 3Z"
              :stroke="badge.arrowColor"
              stroke-width="1.6"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <UiTypographyP class="mx-auto max-w-3xl text-white/80">
        We also provide a wide range of digital marketing and content
        creation services to help your business reach more customers.
        Contact us today for a free consultation.
      </UiTypographyP>

      <div class="mx-auto mt-2 flex flex-wrap justify-center gap-2 lg:hidden">
        <span
          v-for="badge in badges"
          :key="`m-${badge.id}`"
          class="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
          :class="badgeToneClasses[badge.tone]"
        >
          {{ badge.label }}
        </span>
      </div>

      <div class="mt-6 flex justify-center gap-3">
        <NuxtLink
          to="/contact"
          class="rounded-lg border-2 border-pink bg-pink px-6 py-3 text-lg font-medium text-pink-dark shadow-lg duration-200 hover:-translate-y-1"
        >Let's Talk</NuxtLink>
        <NuxtLink
          to="/academy"
          class="rounded-lg border-2 border-pink bg-primary px-6 py-3 text-lg font-medium text-white shadow-lg duration-200 hover:-translate-y-1"
        >Our Academy</NuxtLink>
      </div>
    </Container>

    <div class="relative z-[1] mt-16 flex justify-center lg:mt-20">
      <div class="h-[380px] w-[380px] overflow-hidden">
        <img
          src="/images/lady.png"
          alt="Professional Lady"
          class="h-full w-full object-cover object-top"
        >
      </div>
    </div>
  </section>
</template>