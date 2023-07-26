<template>
  <header class="ticky top-0 h-fit py-40 md:py-0 md:h-screen max-w-7xl mx-auto px-6 grid place-items-center">
    <div>
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
    <img src="@/assets/images/gradient.png" class="w-72 rotate-45 absolute right-0 -bottom-40" alt="">
  </header>
</template>