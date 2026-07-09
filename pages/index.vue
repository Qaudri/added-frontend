<template>
  <HomeHero></HomeHero>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.',
  ogTitle: 'Added | Digital Solutions Built for Humans',
  ogDescription: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.',
  ogUrl: 'https://addeddigital.com/',
  ogImage: 'https://addeddigital.com/og-image.png',
  twitterTitle: 'Added | Digital Solutions Built for Humans',
  twitterDescription: 'Added creates fast, modern websites and digital experiences that help ambitious brands grow online.',
  twitterImage: 'https://addeddigital.com/og-image.png',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://addeddigital.com/' }
  ]
})
</script>