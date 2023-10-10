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

import image1 from '@/assets/brand/projects/01.jpg';
import image2 from '@/assets/brand/projects/02.jpg';
import image3 from '@/assets/brand/projects/03.jpg';
import image4 from '@/assets/brand/projects/04.jpg';
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
    imagePath: image4
  },
]

onMounted(() =>{
  const works = document.querySelectorAll(`.projects`)
  works.forEach((project) => {
    new Glide(project, {
      type: 'carousel',
      focusAt: 'center',
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