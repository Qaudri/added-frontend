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

  <section id="testimonials" class="bg-[#F5F3F3] py-32">
    <Container class="space-y-16">
      <UiTypographyH2 class="text-center">Trusted by Brands, Backed by Stories</UiTypographyH2>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li class="bg-white border border-gray-200 rounded-2xl p-8 space-y-6">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote-icon lucide-quote"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
          </div>

          <UiTypographyP class="italic">
            It was a no brainer for us to work with you. We loved all your concept work and you have delivered superbly on everything: the branding, website, social media, etc.
          </UiTypographyP>

          <div class="flex gap-4 items-center">
            <div class="w-12 h-12 bg-pink rounded-full grid place-content-center text-pink-dark font-bold">
              WD
            </div>
            <div>
              <UiTypographyP class="font-bold m-0">Will Douglas</UiTypographyP>
              <span class="text-xs text-gray-400">Founder, Local Craft</span>
            </div>
          </div>
        </li>

        <li class="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 md:hidden lg:block">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote-icon lucide-quote"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
          </div>

          <UiTypographyP class="italic">
            Added have being exceptional throughout this process, they have constantly gone above and beyond working with us on a very challenging brief.
          </UiTypographyP>

          <div class="flex gap-4 items-center">
            <div class="w-12 h-12 bg-primary rounded-full grid place-content-center text-white font-bold">
              PB
            </div>
            <div>
              <UiTypographyP class="font-bold m-0">Paul Bunyan</UiTypographyP>
              <span class="text-xs text-gray-400">Marketing Lead</span>
            </div>
          </div>
        </li>

        <li class="bg-white border border-gray-200 rounded-2xl p-8 space-y-6">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote-icon lucide-quote"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
          </div>

          <UiTypographyP class="italic">
            The whole team were very engaging, warm and welcoming whilst being experts in their trade. They very much bought into our ambitions.
          </UiTypographyP>

          <div class="flex gap-4 items-center">
            <div class="w-12 h-12 bg-secondary/20 rounded-full grid place-content-center text-secondary font-bold">
              BC
            </div>
            <div>
              <UiTypographyP class="font-bold m-0">Berry Clarkson</UiTypographyP>
              <span class="text-xs text-gray-400">Operations Director</span>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  </section>

  <section id="cta" class="py-32 bg-gradient-to-br from-primary/10 to-pink-dark/30">
    <Container class="grid lg:grid-cols-2 gap-16">
      <div class="space-y-8">
        <UiTypographyH2>Have a Project in Mind? <em class="text-primary">— Let's Talk</em></UiTypographyH2>
        <UiTypographyP>
          Good design isn't just about aesthetics—it's about results. Learn how our thoughtful UX strategies can turn casual visitors into loyal customers.
        </UiTypographyP>
        <div class="space-y-6">
          <NuxtLink to="tel:+2348066600820" class="flex gap-6 items-center">
            <div class="bg-white shadow-md rounded-full w-14 h-14 grid place-content-center">
              <Phone color="#058182" :size="18"></Phone>
            </div>
            <div>
              <span class="text-sm">Give us a call</span>
              <UiTypographyP class="text-xl font-bold">+234 806 660 0820</UiTypographyP>
            </div>
          </NuxtLink>
          <NuxtLink to="mailto:contact@addeddigital.com" class="flex gap-6 items-center">
            <div class="bg-white shadow-md rounded-full w-14 h-14 grid place-content-center">
              <Mail color="#058182" :size="18"></Mail>
            </div>
            <div>
              <span class="text-sm">Send an email</span>
              <UiTypographyP class="text-xl font-bold">contact@addeddigital.com</UiTypographyP>
            </div>
          </NuxtLink>

        </div>
      </div>

      <FormsContact />
    </Container>
  </section>
</template>

<script setup lang="ts">
import { Phone, Mail } from '@lucide/vue';

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