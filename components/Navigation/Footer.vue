<template>
  <footer class="text-accent">
    <div class="max-w-7xl container mx-auto px-6 p-8 md:flex justify-between items-center">
      <div class="" >
        <div class="flex gap-4 items-center">
        <NuxtLink to="https://instagram.com/addeddigitalsolutions?igshid=MzRlODBiNWFlZA==" class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
          <img src="@/assets/images/insta.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        <NuxtLink class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
          <img src="@/assets/images/facebook.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        <NuxtLink to="https://twitter.com/addeddigital?t=OZkFn-mOMALUjGTTFOgQeg&s=09" class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
          <img src="@/assets/images/twitter.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        <NuxtLink class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
          <img src="@/assets/images/linkedin.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        </div>
        <UiTypographyP class="mt-4">{{new Date().getFullYear()}} Added Digital Solutions</UiTypographyP>
      </div>

      <div class="grid gap-2 text-left md:text-right mt-8 md:mt-0">
        <h2 class="text-primary text-xl font-bold">Added Digital Solutions</h2>
        <UiTypographyP class="text-accent capitalize">1st floor, ID Global building, beside Allan pharmacy,<br/>opp Iwo city hall, Iwo, Osun state, nigeria</UiTypographyP>
        <h2 class="text-primary text-xl font-bold">+2348066600820</h2>
        <h2 class="text-primary text-xl font-bold">contact@addeddigital.com</h2>
      </div>
    </div>
  </footer>
</template>