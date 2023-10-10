<template>
  <div class="clients mt-8">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides items-center" >
        <li v-for="image in brands" :key="image.id" class="glide__slide">
          <img :src="image.image" class="w-40" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';
import tb from '@/assets/brand/clients/tb.svg'
import niffy from '@/assets/brand/clients/niffy.svg'
import vacations from '@/assets/brand/clients/vacations.svg'
import naked from '@/assets/brand/clients/naked.svg'
import one from '@/assets/brand/clients/oneonone.svg'
import ajwaad from '@/assets/brand/clients/ajwaad.svg'
import exclusive from '@/assets/brand/clients/exclusive.svg'
import williams from '@/assets/brand/clients/williams.svg'
const brands = [
  {
    id: 1,
    image: tb
  },
  {
    id: 2,
    image: niffy
  },
  {
    id: 3,
    image: vacations
  },
  {
    id: 4,
    image: naked
  },
  {
    id: 5,
    image: williams
  },
  {
    id: 6,
    image: one
  },
  {
    id: 7,
    image: ajwaad
  },
  {
    id: 8,
    image: exclusive
  },

]
onMounted(() =>{
  const clients = document.querySelectorAll(`.clients`)
   clients.forEach((client) => {
    new Glide(client, {
      type: 'carousel',
      focusAt: 'center',
      autoplay: true,
      animationDuration: 1500,
      gap: 50,
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