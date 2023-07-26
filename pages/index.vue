<template>
  <header class="relative h-fit py-40 md:py-0 md:h-screen grid place-items-center">
    <div class="max-w-7xl container mx-auto px-6 text-accent">
      <h1 class="uppercase font-bold text-8xl lg:text-9xl text-center bebas">Ignite  Your<br/>Imagination</h1>
      <UiTypographyH3 class="text-center m-0">Bespoke Creative Services</UiTypographyH3>

      <div class="flex gap-5 mt-8 justify-center items-center">
        <UiButtonsPrimary>Discover what we do</UiButtonsPrimary>
        <UiButtonsTertiary>
          <div class="flex gap-2 items-center">
            <span>Scroll Down</span>
            <div class="animate-bounce">
              <IconsNext class="w-7 rotate-90 block"></IconsNext>
            </div>
          </div>
        </UiButtonsTertiary>
      </div>
    </div>
    <img src="@/assets/images/gradient.png" class="w-72 absolute right-0 -bottom-[15%]" alt="">
  </header>

  <section class="bg-gray-100 py-20 px-6">
    <div class="max-w-7xl container mx-auto">
      <div class="block gap-5 md:flex">
        <UiTypographyH1 class="bebas text-accent">We Innovate Your Vision.</UiTypographyH1>
        <UiTypographyH3 class="md:w-1/2 text-accent">We help craft unique and tailored solutions that moves your business forward. Partnering with passionate leaders and visionary entrepreneurs, we apply creativity, strategy, design and data to re-invent businesses, drive growth and orchestrate customer centric transformation.</UiTypographyH3>
      </div>

      <div class="grid md:grid-cols-3 divide-accent divide-y md:divide-y-0 md:divide-x mt-20 text-accent">
        <div class="w-full p-5">
          <div class="w-full lg:w-2/3 mx-auto">
            <UiTypographyH1 class="bebas inline-flex items-baseline">97
            <span>
              <UiTypographyH2 class="bebas">&nbsp;%</UiTypographyH2>
            </span>
            </UiTypographyH1>
            <UiTypographyP>CLIENTS SAW AN INCREASE OF MORE OF 90% ON SALES</UiTypographyP>
          </div>

        </div>

        <div class="w-full p-5">
          <div class="w-full lg:w-2/3 mx-auto">
            <UiTypographyH1 class="bebas inline-flex items-baseline">5
            <span>
              <UiTypographyH2 class="bebas">&nbsp;M</UiTypographyH2>
            </span>
            </UiTypographyH1>
            <UiTypographyP>PEOPLE REACHED BY OUR CLIENTS WITH US</UiTypographyP>
          </div>

        </div>

        <div class="w-full p-5">
          <div class="w-full lg:w-2/3 mx-auto">
            <UiTypographyH1 class="bebas inline-flex items-baseline">4.67
            <span>
              <UiTypographyH2 class="bebas">&nbsp;M</UiTypographyH2>
            </span>
            </UiTypographyH1>
            <UiTypographyP>HIGH ENGAGEMENT SINCE DAY ONE</UiTypographyP>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-20 max-w-7xl mx-auto container text-accent">
    <UiTypographyH1 class="bebas">Services</UiTypographyH1>
    <div class="grid grid-cols-2 gap-5 lg:gap-16 mt-6">
    <div class="bg-gray-100 w-full aspect-video"></div>
    <div class="justify-end flex flex-col">
      <UiTypographyH1 class="bebas">Branding</UiTypographyH1>
      <UiTypographyH3 class="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis earum placeat consectetur fuga sed repellendus ea explicabo unde, quas odio. Pariatur facilis nobis distinctio harum explicabo laborum sapiente fugit?</UiTypographyH3>
      <UiButtonsSecondary class="flex">Learn More <span class="inline"><IconsNext class="w-5"/></span></UiButtonsSecondary>
    </div>
    </div>
  </section>
</template>