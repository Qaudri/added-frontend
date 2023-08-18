<template>
  <div class="glide_slides">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="item in 10" :key="item.id" class="glide__slide">
          <div class="h-screen-50 w-full min-w-full bg-gradient-to-b rounded-lg from-primary to-black">
            <UiTypographyH3 class="text-white">AbikeAlagbo</UiTypographyH3>
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
      focusAt: 'center',
      autoplay: true,
      animationDuration: 2000,
      gap: 10,
      perView: 3,
      breakpoints: {
        200: {
          perView: 1
        },
        1024: {
          perView: 2
        },
      }
    }).mount()
  })
})
</script>