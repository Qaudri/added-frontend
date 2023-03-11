<template>
  <div>
    <div class="bg-accent h-screen relative">
      <div class="h-full w-full relative flex items-center justify-end overflow-x-hidden">
        <div id="blob" class="mr-8 absolute"></div>
        <div id="blur"></div>
      </div>

      <div class="container mx-auto px-6">
        <!-- <UiTypography -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>


#blob {
  height: 34vmax;
  aspect-ratio: 1;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(to right, #058182, white);
  animation: rotate 10s infinite linear;
  opacity: 0.8;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  
  50% {
    transform: scale(1 1.5);
  }
  
  to {
    transform: rotate(360deg);
  }
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

</style>