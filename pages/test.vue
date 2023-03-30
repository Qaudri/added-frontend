<template>
  <div>
    <div class="bg-primary h-screen vertical-sections"></div>

    <div class="mt-10 overflow-x-hidden w-full flex items-center h-screen">
      <div class="flex gap-20 horizontal-container">
        <div class="bg-blue-500 h-[75vh] aspect-square horizontal-section relative" v-for="item in 5"></div>
      </div>
    </div>

    <div class="bg-accent h-screen vertical-sections"></div>
  </div>
</template>

<script>
definePageMeta({
  layout: false,
})

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    let horizontalContainer = this.$el.querySelector('.horizontal-container');
    let horizontalSections = gsap.utils.toArray(".horizontal-section");

    let totalWidth = 0;
    horizontalSections.forEach(section => {
      totalWidth += section.offsetWidth;
    });

    horizontalContainer.style.width = `${totalWidth}px`;

    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      scrollTrigger: {
        trigger: horizontalContainer,
        pin: true,
        scrub: true,
        start: 'center center',
        invalidateOnRefresh: true,
        end: () => "+=" + horizontalContainer.offsetWidth,
      }
    });

    const verticalSections = this.$el.querySelectorAll('.vertical-sections');
    verticalSections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        pinSpacing: false
      });
    });
  }
}
</script>