<template>
  <Head>
    <Title>Home | Added Digital Solutions</Title>
  </Head>
  <header class="relative h-fit py-40 md:py-0 md:h-screen grid place-items-center">
    <div class="max-w-7xl container mx-auto px-6 text-accent">
      <h1 class="capitalize font-bold text-6xl lg:text-8xl text-center">Ignite Your<br/>Imagination</h1>
      <UiTypographyH3 class="text-center mt-4 font-medium text-accent">Bespoke Creative Services</UiTypographyH3>

      <div class="flex gap-5 mt-8 justify-center items-center">
        <UiButtonsPrimary>Discover what we do</UiButtonsPrimary>
        <UiButtonsTertiary>
          <div class="flex gap-2 items-center">
            <span>Scroll Down</span>
            <div class="animate-bounce">
              <IconsNext class="w-5 rotate-90 block"></IconsNext>
            </div>
          </div>
        </UiButtonsTertiary>
      </div>
    </div>
    <img src="@/assets/images/gradient.png" class="w-72 absolute right-0 -bottom-[15%]" alt="">
  </header>

  <section class="bg-gray-100 py-20 px-6">
    <div class="max-w-7xl container mx-auto">
      <div class="bg-white rounded-2xl border border-accent p-5 relative -top-28 lg:w-3/4 mx-auto shadow-2xl">
        <UiTypographyH3 class="text-center">Our Clients</UiTypographyH3>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <NavigationLogo class="w-3/4 mx-auto" />
          <NavigationLogo class="w-3/4 mx-auto" />
          <NavigationLogo class="w-3/4 mx-auto" />
          <NavigationLogo class="w-3/4 mx-auto" />
        </div>
      </div>

      <UiTypographyH2 class="text-center">Core Services</UiTypographyH2>
      <ul class="mt-8 grid gap-8">
        <CardsServices v-for="service in services" :key="service.id" :imagePath="service.imagePath" :title="service.title" :description="service.description" />
      </ul>
    </div>
  </section>
</template>
<script>
import design from '@/assets/images/services/design.svg'
import web from '@/assets/images/services/web.svg'
import social from '@/assets/images/services/social.svg'
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Branding',
          description: 'We create unique brands for our clients and build the most popular websites of the moment with an outstanding design team.',
          imagePath: design,
        },
        {
          id: 2,
          title: 'Web Development',
          description: 'We create unique websites for our clients and build the most popular websites of the moment with an outstanding design team.',
          imagePath: web,
        },
        {
          id: 3,
          title: 'Digital Marketing',
          description: 'Together, we are a team of imaginative, inquisitive people with a shared passion, united by our desire to craft impactful and engaging marketing strategies and campaigns for ambitious brands.',
          imagePath: social,
        },
      ]
    }
  },
}
</script>