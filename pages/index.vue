<template>
  <div>
    <header class="bg-accent md:h-screen h-screen-75 relative">
      <div class="h-full w-full relative flex items-center justify-end overflow-x-hidden">
        <div id="blob" class="mr-10 absolute h-3/5"></div>
        <div id="blur"></div>
      </div>

      <div class="text-white absolute top-0 z-10 h-full w-full flex">
        <div class="container mx-auto justify-between flex items-center h-full px-6">
          <div class="grid gap-5 w-2/3">
            <UiTypographyH1>
              Unleashing <br> Innovation <br> with <br> Seasoned <br> Expertise
            </UiTypographyH1>
            <UiTypographyP>Empowering Your Vision, Inspiring Your Success.</UiTypographyP>
            <UiButtonsPrimary>Get in touch</UiButtonsPrimary>
          </div>
          <div class="h-full w-1/3">
            <iframe src='https://my.spline.design/untitled-ab9d279763d37f709d725c5e9bd6903e/' frameborder='0' width='100%' height='100%'></iframe> 
          </div>
        </div>
      </div>
    </header>
    <section aria-label class="py-10 container mx-auto">
    
    </section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>


#blob {
  aspect-ratio: 1;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(to right, #058182, white);
  animation: rotate 5s infinite linear;
  opacity: 0.8;
  position: absolute;
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