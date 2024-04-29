<template>
  <header class="hero relative">
    <div class="bg-black bg-opacity-70 p-10 text-white max-w-2xl absolute z-10 right-0 bottom-0">
      <UiTypographyH2 class="uppercase">ultimate solutions for your digital needs<span class="text-primary">.</span></UiTypographyH2>
      <UiTypographyP class="mt-6">We also provide a wide range of digital marketing and content creation services to help your business reach more customers. Contact us today for a free consultation.</UiTypographyP>
      <UiButtonsTalk class="text-primary w-32 mt-8 cursor-pointer hover:text-secondary duration-300 ease-in-out" />
    </div>
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="portfolio in portfolios" :key="portfolio.id" class="glide__slide">
          <div :style="{ background:`url(${portfolio.image})`}" class="background h-screen-50 md:h-screen-60 lg:h-screen w-full">
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
import Glide from '@glidejs/glide';
import { onMounted } from 'vue';

import portfolio1 from '@/assets/images/hero/01.jpg';
import portfolio2 from '@/assets/images/hero/02.jpg';
import portfolio3 from '@/assets/images/hero/03.jpg';
import portfolio4 from '@/assets/images/hero/04.jpg';
const portfolios = [
  {
    id: 1,
    image: portfolio1,
    title: 'ultimate solutions for your digital needs',
    caption: 'We also provide a wide range of digital marketing and content creation services to help your business reach more customers. Contact us today for a free consultation.'
  },
  {
    id: 2,
    image: portfolio2,
    title: 'We help businesses reach their peaks',
    caption: ''
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Dummy Text Number Three'
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Dummy Text Number Four'
  },
]
onMounted(() =>{
  const hero = document.querySelectorAll(`.hero`)
   hero.forEach((section) => {
    new Glide(section, {
      type: 'carousel',
      focusAt: 0,
      autoplay: 7000,
      animationDuration: 1000,
      gap: 0,
      perView: 1
      }).mount()
  })
})
</script>