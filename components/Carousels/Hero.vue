<template>
  <header class="hero">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div v-for="portfolio in portfolios" :key="portfolio.id" class="glide__slide ">
            <div :style="{ background:`url(${portfolio.image})`}" class="background h-screen w-full"></div>
          </div>
        </div>
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
    image: portfolio1
  },
  {
    id: 2,
    image: portfolio2
  },
  {
    id: 3,
    image: portfolio3
  },
  {
    id: 4,
    image: portfolio4
  },
]
onMounted(() =>{
  const hero = document.querySelectorAll(`.hero`)
   hero.forEach((section) => {
    new Glide(section, {
      type: 'carousel',
      focusAt: 0,
      autoplay: true,
      animationDuration: 1000,
      gap: 0,
      perView: 1
      }).mount()
  })
})
</script>