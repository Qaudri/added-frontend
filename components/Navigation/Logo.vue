<template>
  <nuxt-link :to="location">
    <img src="@/assets/brand/logo.png" class="w-full" alt="">
  </nuxt-link>
</template>
<script>
  export default {
    props: {
      location: String
    }
  }
</script>