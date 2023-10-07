<template>
  <div class="glide_slides">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="item in 10" :key="item.id" class="glide__slide w-full h-full">
          <div class="h-screen-75 w-full bg-gradient-to-b rounded-3xl from-white to-black p-8 flex items-end">
            <div>
              <UiTypographyH2 class="text-white">AbikeAlagbo</UiTypographyH2>
              <UiTypographyP class="text-white">Full brand identity design for AbikeAlagbo</UiTypographyP>
              <UiButtonsPrimary class="mt-8">Learn More</UiButtonsPrimary>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

onMounted(() =>{
  const sliders = document.querySelectorAll(`.glide_slides`)
  sliders.forEach((slider) => {
    new Glide(slider, {
      type: 'carousel',
      focusAt: 0,
      autoplay: true,
      animationDuration: 2000,
      gap: 10,
      peek: 20,
      breakpoints: {
        768: {
          perView: 1
        },
        1366: {
          perView: 2
        },
        1536: {
          perView: 3
        }
      }
    }).mount()
  })
})
</script>