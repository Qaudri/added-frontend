<template>
  <HomeHero></HomeHero>

  <section class="isolate py-16" id="About">
    <Container class="space-y-16">
      <div class="grid gap-6 lg:gap-10 lg:grid-cols-2 xl:gap-12 items-end">
        <div class="space-y-2">
          <UiTypographyP class="text-primary uppercase tracking-widest">About Us</UiTypographyP>
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
      <ul class="grid md:grid-cols-2 gap-6">
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid lg:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-[#923D8B]">01</span>
            <h4 class="text-2xl">Branding & Positioning</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-[#923D8B]">
              <li>Identity Design</li>
              <li>Visual Branding</li>
              <li>Brand Strategy</li>
            </ul>
          </div>
          <img src="/images/branding.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover w-full" >
        </li>
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid lg:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-primary">02</span>
            <h4 class="text-2xl">Web & mobile Design</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-primary">
              <li>Responsive web design</li>
              <li>UI/UX</li>
            </ul>
          </div>
          <img src="/images/digital.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover w-full" >
        </li>
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid lg:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-secondary">03</span>
            <h4 class="text-2xl">Packaging & Instore</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-secondary">
              <li>Product Design</li>
              <li>Retail Displays</li>
              <li>Print Production</li>
            </ul>
          </div>
          <img src="/images/packaging.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover w-full" >
        </li>
        <li class="bg-white border-gray-200 border rounded-2xl p-8 gap-8 grid lg:grid-cols-2">
          <div class="space-y-2">
            <span class="hanken text-base text-[#923D8B]">04</span>
            <h4 class="text-2xl">Marketing & Advertising</h4>
            <ul class="space-y-2 list-disc list-inside marker:text-[#923D8B]">
              <li>SEO Mastery</li>
              <li>PPC Campaigns</li>
              <li>Social Strategy</li>
            </ul>
          </div>
          <img src="/images/marketing.jpg" alt="Branding" class="rounded-lg h-[200px] object-cover w-full" >
        </li>
      </ul>
    </Container>
  </section>

  <section class="bg-primary-dark py-32" id="Process">
    <Container class="grid md:grid-cols-2 gap-12 xl:gap-16 items-center">
      <div class="text-white space-y-4">
        <UiTypographyP class="text-primary-light uppercase tracking-widest">OUR WORK PROCESS</UiTypographyP>
        <UiTypographyH2>Our Process design, and Deliver Simplified</UiTypographyH2>
        <UiTypographyP>We follow a simple, results-driven process to bring your vision to life. From
        understanding your goals to designing and delivering real impact.</UiTypographyP>
        <ul class="space-y-8 pt-8">
          <li class="flex items-center group gap-6">
            <span class="h-12 w-12 rounded-full grid place-content-center border border-primary/30 group-hover:bg-primary/20 ease-in-out duration-200 text-primary-light font-bold">01</span>

            <div>
              <h4 class="text-gray-200 group-hover:text-pink ease-in-out duration-200 text-xl">Discussion</h4>
              <p class="text-sm">Getting to know your business inside and out.</p>
            </div>
          </li>
          <li class="flex items-center group gap-6">
            <span class="h-12 w-12 rounded-full grid place-content-center border border-primary/30 group-hover:bg-primary/20 ease-in-out duration-200 text-primary-light font-bold">02</span>

            <div>
              <h4 class="text-gray-200 group-hover:text-pink ease-in-out duration-200 text-xl">Ideas & Concepts</h4>
              <p class="text-sm">Crafting the narrative that belongs to your brand.</p>
            </div>
          </li>
          <li class="flex items-center group gap-6">
            <span class="h-12 w-12 rounded-full grid place-content-center border border-primary/30 group-hover:bg-primary/20 ease-in-out duration-200 text-primary-light font-bold">03</span>

            <div>
              <h4 class="text-gray-200 group-hover:text-pink ease-in-out duration-200 text-xl">Design</h4>
              <p class="text-sm">Turning concepts into high-impact visuals.</p>
            </div>
          </li>
          <li class="flex items-center group gap-6">
            <span class="h-12 w-12 rounded-full grid place-content-center border border-primary/30 group-hover:bg-primary/20 ease-in-out duration-200 text-primary-light font-bold">04</span>

            <div>
              <h4 class="text-gray-200 group-hover:text-pink ease-in-out duration-200 text-xl">Development</h4>
              <p class="text-sm">Building the final digital story for the world to see.</p>
            </div>
          </li>
        </ul>
      </div> 
      <div class="relative">
        <div class="bg-pink-dark/50 rounded-full h-32 aspect-square absolute top-0 right-0 blur-3xl"></div>
        <div class="bg-primary/50 rounded-full h-32 aspect-square absolute bottom-0 left-0 blur-3xl"></div>
        <img src="/images/process.jpg" alt="Our Process" class="rounded-3xl md:h-[600px] object-cover w-full">
      </div>
    </Container>  
  </section>

  <section id="Portfolio" class="py-32">
    <Container class="space-y-16">
      <div class="flex flex-wrap justify-between items-end gap-6 lg:gap-10 xl:gap-12">
        <div class="space-y-2">
          <UiTypographyP class="text-primary uppercase tracking-widest">portfolio</UiTypographyP>
          <UiTypographyH2>See All <span class="text-primary hanken">Our Latest</span><br> Creative Work</UiTypographyH2>
        </div>
        <NuxtLink to="/portfolio"
        class="bg-pink text-pink-dark rounded-full py-3 px-6 hover:-translate-y-2 duration-200 ease-in-out">View All Works</NuxtLink>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <img src="/images/portfolio1.jpg" alt="Portfolio Item" class="rounded-2xl h-[450px] object-cover w-full"/>
        <img src="/images/portfolio2.jpg" alt="Portfolio Item" class="rounded-2xl h-[450px] object-cover w-full"/>
        <img src="/images/portfolio3.jpg" alt="Portfolio Item" class="rounded-2xl h-[450px] object-cover w-full md:col-span-2"/>
      </div>
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