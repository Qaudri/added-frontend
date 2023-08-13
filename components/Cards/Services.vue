<template>
  <li class="flex flex-col md:flex-row gap-8 p-8">
    <img :src="imagePath" alt="">
    <div>
      <UiTypographyH3>
      {{ title }}
      </UiTypographyH3>
      <UiTypographyP class="mt-2">{{ description }}</UiTypographyP>
      <UiButtonsPrimary class="mt-8" @click="router.push({name: 'services-'})">Learn More</UiButtonsPrimary>
    </div>
  </li>
</template>
<script>
export default {
  props:{
    imagePath: String,
    title: String,
    description: String,
  }
}
</script>