<template>
  <HomeHero></HomeHero>

  <section class="isolate py-16" id="About">
    <Container class="space-y-16">
      <div class="grid gap-6 lg:gap-10 lg:grid-cols-2 xl:gap-12 items-end">
        <div class="grid gap-2">
          <UiTypographyP class="text-primary uppercase">About Us</UiTypographyP>
          <UiTypographyH2>Smart, fast, and Creative <br> —<em class="text-primary">we are Added.</em></UiTypographyH2>
        </div>
        <UiTypographyP>
          We're a small collective of Award Winning Branding and Digital Marketing
          specialists with a passion for breathing new life into brands. Our team
          considers ourselves to be digital storytellers.
        </UiTypographyP>
      </div>
      <ul class="grid lg:grid-cols-3 gap-6">
        <li class="rounded-2xl p-10 border border-gray-200 space-y-2">
          <h3 class="text-5xl font-normal text-[#923D8B]">4x</h3>
          <h5 class="text-lg font-semibold">Customer confidence</h5>
          <p class="text-sm">
            Efficient processes leading to higher
            engagement and project clarity.
          </p>
        </li>
        <li class="rounded-2xl p-10 border border-gray-200 space-y-2">
          <h3 class="text-5xl font-normal text-primary">2x</h3>
          <h5 class="text-lg font-semibold">Email Open Rate</h5>
          <p class="text-sm">
            Strategic digital marketing that resonates with
            the target audience.
          </p>
        </li>
        <li class="rounded-2xl p-10 border border-gray-200 space-y-2">
          <h3 class="text-5xl font-normal text-secondary">400%</h3>
          <h5 class="text-lg font-semibold">ROI Growth</h5>
          <p class="text-sm">
            Measured results that directly impact our
            clients' bottom line.
          </p>
        </li>
      </ul>
    </Container>
  </section>

  <section class="py-32 bg-[#fbf9f8]" id="Services">
    <Container class="space-y-16">
      <div class="text-center space-y-4">
        <UiTypographyH2>We Deliver — <em class="text-primary">Comprehensive Solutions</em></UiTypographyH2>
        <UiTypographyP class="max-w-2xl mx-auto">
          We get to know your business inside and out, examining your needs to create
          memorable, stand-out branding.
        </UiTypographyP>
      </div>
      <ul class="grid lg:grid-cols-2 gap-6">
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid md:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-[#923D8B]">01</span>
            <h4 class="text-2xl">Branding & Positioning</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-[#923D8B]">
              <li>Identity Design</li>
              <li>Visual Branding</li>
              <li>Brand Strategy</li>
            </ul>
          </div>
          <img src="/images/branding.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover" >
        </li>
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid md:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-primary">02</span>
            <h4 class="text-2xl">Web & mobile Design</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-primary">
              <li>Responsive web design</li>
              <li>UI/UX</li>
            </ul>
          </div>
          <img src="/images/digital.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover" >
        </li>
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid md:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-secondary">03</span>
            <h4 class="text-2xl">Packaging & Instore</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-secondary">
              <li>Product Design</li>
              <li>Retail Displays</li>
              <li>Print Production</li>
            </ul>
          </div>
          <img src="/images/packaging.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover" >
        </li>
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid md:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-[#923D8B]">04</span>
            <h4 class="text-2xl">Marketing & Advertising</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-[#923D8B]">
              <li>SEO Mastery</li>
              <li>PPC Campaigns</li>
              <li>Social Strategy</li>
            </ul>
          </div>
          <img src="/images/marketing.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover" >
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.',
  ogTitle: 'Added | Digital Solutions Built for Humans',
  ogDescription: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.',
  ogUrl: 'https://addeddigital.com/',
  ogImage: 'https://addeddigital.com/og-image.png',
  twitterTitle: 'Added | Digital Solutions Built for Humans',
  twitterDescription: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.',
  twitterImage: 'https://addeddigital.com/og-image.png',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://addeddigital.com/' }
  ]
})
</script>