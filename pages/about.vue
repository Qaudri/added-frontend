<template>
  <header id="hero" class="h-screen-50 md:h-screen-60 lg:h-screen flex items-center justify-center">
    <div class="bg-black bg-opacity-70 p-10 text-white max-w-3xl">
      <UiTypographyH2 class="uppercase">about us<span class="text-primary">.</span></UiTypographyH2>
      <UiTypographyP class="mt-6">Based in Osun State, Nigeria, we have been providing high-quality digital production services since 2017.</UiTypographyP>
    </div>
  </header>
  <section class="max-w-7xl py-20 container mx-auto px-6 text-accent flex gap-12 items-center flex-col lg:flex-row">
    <div>
      <UiTypographyH2>breaking away from convention<span class="text-primary">.</span></UiTypographyH2>
      <UiTypographyP class="mt-6">We're committed to providing our clients with industry-leading standards and professional services. Our design, developers and technical experts are highly-educated, experienced, and creative; and we're always ready to help!</UiTypographyP>
    </div>

    <img src="@/assets/images/mission.jpg" alt="" class="w-full lg:w-2/5">
  </section>
  <section class="max-w-7xl py-20 container mx-auto px-6 text-accent flex gap-12 items-center flex-col lg:flex-row">
    <img src="@/assets/images/satisfaction.jpeg" alt="" class="hidden lg:block lg:w-2/5">
    <div>
      <UiTypographyH2>focused on customer satisfaction<span class="text-primary">.</span></UiTypographyH2>
      <UiTypographyP class="mt-6">Customer satisfaction is our priority. From website design to orchestrated multi-media campaigns and everything in between, we take each project focusing on stylized clear communication to craft the perfect digital showcase for our clients.</UiTypographyP>
    </div>
  </section>
  <section class="max-w-7xl py-20 container mx-auto px-6 text-accent">
    <ul class="grid gap-8 md:grid-cols-2">
      <li class="p-6 bg-light rounded-xl">
        <img src="@/assets/images/certificate.svg" class="w-16" alt="">
        <h3 class="mt-6 text-2xl uppercase"><strong>highly qualified professionals</strong></h3>
        <UiTypographyP>We're highly-ediucated, experienced and creative!</UiTypographyP>
      </li>
      <li class="p-6 bg-light rounded-xl">
        <img src="@/assets/images/people.svg" class="w-16" alt="">
        <h3 class="mt-6 text-2xl uppercase"><strong>top-notch support</strong></h3>
        <UiTypographyP>We can help with all of your digital content and marketing needs.</UiTypographyP>
      </li>
      <li class="p-6 bg-light rounded-xl">
        <img src="@/assets/images/time.svg" class="w-16" alt="">
        <h3 class="mt-6 text-2xl uppercase"><strong>quick turn around</strong></h3>
        <UiTypographyP>We provide lightning quick response and deliveries.</UiTypographyP>
      </li>
      <li class="p-6 bg-light rounded-xl">
        <img src="@/assets/images/star.svg" class="w-16" alt="">
        <h3 class="mt-6 text-2xl uppercase"><strong>guaranteed satisfaction</strong></h3>
        <UiTypographyP>Our job isn't done until you are satisfied.</UiTypographyP>
      </li>
    </ul>
  </section>
  <section class="max-w-7xl py-20 container mx-auto px-6 text-accent grid lg:grid-cols-2 gap-12">
    <div>
      <UiTypographyH2>get in touch<span class="text-primary">.</span></UiTypographyH2>
      <UiTypographyP class="mt-6">If you have any question regarding your project needs, we encourage you to schedule an appointment or phone consultation with one of our professionals. We are pleased to offer a wide range of services for the specific needs of your business.</UiTypographyP>
    </div>
    <form action="" class="bg-light p-6 rounded-lg gap-6 flex flex-col lg:grid">
      <FormInput label="Name" for="name" type="text" placeholder="Enter your name" />
      <FormInput label="Phone Number" for="phone" type="phone"  placeholder="Enter your phone number" />
      <FormInput label="Email Address" for="email" type="email" placeholder="Enter your email" />
      <FormInput label="Your Industry" for="industry" type="text" placeholder="Enter your email" />
      <div class="col-span-2">
        <label for="message" class="text-sm mb-1 block text-left">Your Message</label>
        <textarea rows="5" type="text" placeholder="How can we help?" class="w-full py-3 px-4 border text-sm outline-none border-accent ring-0 focus:outline-none focus:border-primary active:border-primary rounded-md active:text-primary focus:text-primary text-accent bg-white bg-opacity-10 border-opacity-20 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out" />
      </div>
        <FormButton class="w-36 mx-auto col-span-2">Submit</FormButton>
    </form>
  </section>
</template>
<style>
#hero {
  background: url('@/assets/images/tech.jpg'), #058182;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>