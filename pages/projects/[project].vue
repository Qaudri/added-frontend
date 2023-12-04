<template>
  <Head>
    <Title>Project Title | Added Digital Solutions</Title>
  </Head>
  <header id="project" class="h-screen-50 md:h-screen-60 lg:h-screen flex items-center justify-center"></header>
  <section class="max-w-7xl py-20 container mx-auto px-6 text-accent">
    <div class="md:w-4/5 lg:w-3/5">
      <UiTypographyH2>project name<span class="text-primary">.</span> </UiTypographyH2>
      <h3 class="text-xl mt-6">A brief description about the project. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <UiTypographyP class="mt-6">Our Solution to the project. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et totam nihil repellendus quibusdam, suscipit error laudantium! Quam quaerat molestias doloribus dolorem aperiam placeat pariatur voluptates praesentium, molestiae nam ducimus debitis!</UiTypographyP>
    </div>

    <ul class="grid lg:grid-cols-2 gap-8 mt-16">
      <li v-for="item in 6" class="aspect-square bg-accent portfolio"></li>
    </ul>
  </section>
</template>
<style>
.background {
  background: url('@/assets/images/satisfaction.jpeg');
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

#project {
  background: url('@/assets/images/hero/03.jpg');
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.portfolio:nth-child(3n){
  grid-column: span 2;
  aspect-ratio: 2/1;
}
</style>