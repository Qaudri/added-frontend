<template>
  <li class="flex flex-col md:flex-row gap-4 md:gap-8 p-8 border border-gray-400 rounded-xl">
    <img :src="imagePath" alt="" class="w-14 h-14">
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