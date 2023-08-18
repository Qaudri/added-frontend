<template>
  <Head>
    <Title>Home | Added Digital Solutions</Title>
  </Head>
  <header class="relative h-fit py-40 md:py-0 md:h-screen grid place-items-center">
    <div class="max-w-7xl container mx-auto px-6 text-accent">
      <h1 class="capitalize font-bold sm:text-5xl text-6xl lg:text-8xl text-center">Ignite Your<br/>Imagination</h1>
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
    <img src="@/assets/images/gradient.png" class="w-48 md:w-72 absolute right-0 -bottom-[15%]" alt="">
  </header>

  <section class="bg-primary bg-opacity-5 py-20 px-6">
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
      <ul class="mt-8 grid md:grid-cols-2 gap-8">
        <CardsServices v-for="service in services" :key="service.id" :imagePath="service.imagePath" :title="service.title" :description="service.description" />
      </ul>
    </div>
  </section>

  <section class="py-20 px-6 max-w-7xl container mx-auto">
    <UiTypographyH2>Featured Projects</UiTypographyH2>
    <UiTypographyP>Enjoy some of our best work with previous clients</UiTypographyP>

    <CardsProject class="mt-8"></CardsProject>
  </section>

  <section class="rounded-t-full bg-accent min-h-screen">
    <div class="max-w-7xl mx-auto container py-20 px-6 text-white text-center">
      <UiTypographyP class="">Contact Us</UiTypographyP>
      <h1 class="text-6xl lg:text-8xl font-bold">Let's make <br /> your dream <br /> come through!</h1>
      <UiTypographyP class="mt-5">We are very excited to work with you. Drop us your message today!</UiTypographyP>

      <form action="" class="mt-16 w-[80vw] lg:w-[50vw] mx-auto">
        <div class="grid lg:grid-cols-2  gap-8">
          <FormInput label="Name"/>
          <FormInput label="Company Name"/>
          <FormInput label="Email"/>
          <FormInput label="Mobile"/>
        </div>
        <div class="my-8">
          <label for="" class="block text-left text-sm mb-1">Message</label>
          <textarea rows="10" class="w-full py-3 px-4 border text-sm outline-none border-accent ring-0 focus:outline-none focus:border-primary active:border-primary rounded-md active:text-primary focus:text-primary text-accent bg-white bg-opacity-10 border-opacity-20 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out"></textarea>
        </div>

        <div class="w-36 mx-auto mt-8">
          <FormButton>Submit</FormButton>
        </div>
      </form>
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
          title: 'Consultancy',
          description: `Whatever you need with your next step, you can discuss with us and we'll help you bring it to life in the easiest, most effective way possible. Get in touch and experience it firsthand.`,
          imagePath: design,
        },
        {
          id: 2,
          title: 'Branding',
          description: 'You can get an appealing and creative identity design for your next project, we are committed to delivering high-quality design services that help our clients achieve their business goals.',
          imagePath: design,
        },
        {
          id: 3,
          title: 'Web Development',
          description: 'We offer top-notch web development services to help your business succeed online. Whether you need a simple brochure website or a complex e-commerce platform, or a data-driven portal development we can help.',
          imagePath: web,
        },
        {
          id: 4,
          title: 'Digital Marketing',
          description: 'With our team of creatives and experst, you can rest easy knowing that your message is seen by audiences across the world, and your marketing is running at optimum efficiency. Contact us today to learn more.',
          imagePath: social,
        },
      ]
    }
  },
}



</script>