<template>
  <Head>
    <Title>Projects | Added Digital Solutions</Title>
  </Head>
  <header id="hero" class="h-screen-50 md:h-screen-60 lg:h-screen flex items-center justify-center">
    <div class="bg-black bg-opacity-70 p-10 text-white max-w-3xl">
      <UiTypographyH2 class="uppercase">our projects<span class="text-primary">.</span></UiTypographyH2>
      <UiTypographyP class="mt-6">Check out some of the projects we've done. Do share your thoughts!</UiTypographyP>
    </div>
  </header>
  <section class="max-w-7xl py-20 container mx-auto px-6 text-accent">
    <ul class="grid grid-cols-1 xl:grid-cols-2 gap-12">
      <li class="rounded-xl border border-accent" v-for="project in 6">
        <NuxtLink :to="{name: 'projects-project', params: {project: 'sample project'}}">
          <div class="background h-64 w-full rounded-t-xl"></div>
          <div class="p-6">
            <UiTypographyH2 class="text-primary">Project title</UiTypographyH2>
            <UiTypographyP class="mt-6">Project description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero esse, consequatur voluptate, natus, earum rem ab nihil laborum cum dolore? Reiciendis fugit recusandae quos tempore molestias nesciunt exercitationem explicabo!</UiTypographyP>
            <UiButtonsSecondary class="mt-6">Read More</UiButtonsSecondary>
          </div>
        </NuxtLink>
      </li>
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

#hero {
  background: url('@/assets/images/tech.jpg');
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
</style>