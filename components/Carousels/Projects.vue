<template>
  <div class="projects mt-8">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="project in projects" :key="project.id" class="glide__slide">
          <div :style="{ background:`url(${project.imagePath})`}" class="background w-full aspect-square bg-accent"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

import image1 from '@/assets/images/service.jpg';
import image2 from '@/assets/images/creativity.jpg';
import image3 from '@/assets/images/art.webp';
const projects = [
  {
    id: 1,
    imagePath: image1
  },
  {
    id: 2,
    imagePath: image2
  },
  {
    id: 3,
    imagePath: image3
  },
  {
    id: 4,
    imagePath: image1
  },
  {
    id: 5,
    imagePath: image2
  },
  {
    id: 6,
    imagePath: image3
  },
]

onMounted(() =>{
  const projects = document.querySelectorAll(`.projects`)
  projects.forEach((project) => {
    new Glide(project, {
      type: 'carousel',
      focusAt: 0,
      autoplay: true,
      animationDuration: 1500,
      gap: 30,
      peek: 0,
      breakpoints: {
        768: {
          perView: 1
        },
        1024: {
          perView: 2
        },
        1280: {
          perView: 3
        },
        1536: {
          perView: 4
        }
      }
      }).mount()
  })
})
</script>