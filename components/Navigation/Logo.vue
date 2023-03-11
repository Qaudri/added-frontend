<template>
  <nuxt-link :to="location">
    <img src="@/assets/brand/main-logo.svg" class="w-full" alt="">
  </nuxt-link>
</template>
<script>
  export default {
    props: {
      location: String
    }
  }
</script>