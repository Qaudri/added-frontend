<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
  useHead({
    title: 'Home | Added Digital Solutions',
  });
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
html {
  scroll-behavior: smooth;
}

* {
  font-family: Poppins;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width:8px;
  cursor: pointer;
}

*::-webkit-scrollbar-thumb {
  width:8px;
  background-color: #058182;
  cursor: pointer;
  border-radius: 50px;
}
</style>