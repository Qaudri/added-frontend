<template>
  <div class="clients mt-8">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="item in 10" class="glide__slide">
          <img src="@/assets/brand/main-logo.svg" class="w-40" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

onMounted(() =>{
  const clients = document.querySelectorAll(`.clients`)
   clients.forEach((client) => {
    new Glide(client, {
      type: 'carousel',
      focusAt: 0,
      autoplay: true,
      animationDuration: 1500,
      gap: 50,
      peek: 0,
      breakpoints: {
        768: {
          perView: 3
        },
        1024: {
          perView: 4
        },
        1280: {
          perView: 5
        },
        1536: {
          perView: 6
        }
      }
      }).mount()
  })
})
</script>