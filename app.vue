<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body {
  overflow-y: visible;
	position: relative;
}

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width:0px;
  cursor: pointer;
}
</style>