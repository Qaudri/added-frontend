<template>
  <section class="text-accent text-center">
    <div class="bg-light">
      <div class="px-6 pt-20 pb-6 container max-w-7xl mx-auto reviews">
        <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="review in reviews" :key="review.id" class="glide__slide w-full">
            <div class="w-full">
              <UiTypographyP>"{{ review.review }}"</UiTypographyP>
              <h2 class="font-bold text-xl mt-8">{{ review.reviewer }}</h2>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <img src="@/assets/images/triangle.svg" alt="" class="w-96 mx-auto">
  </section>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

const reviews = [
  {
    id: 1,
    review: 'It was a no brainer for us to work with you. We loved all your concept work and you have delivered superbly on everything: the branding, can designs, website, invitations, posters, social media, etc. We are thrilled with the end result and I am confident that we are going to make a big noise in the beer world. And a lot of this is down to you. Obviously it helps to have great beer in the cans but without your great work we would be just another can on the shelf.',
    reviewer: 'Will Douglas'
  },
  {
    id: 2,
    review: 'It was a no brainer for us to work with you. We loved all your concept work and you have delivered superbly on everything: the branding, can designs, website, invitations, posters, social media, etc. We are thrilled with the end result and I am confident that we are going to make a big noise in the beer world. And a lot of this is down to you. Obviously it helps to have great beer in the cans but without your great work we would be just another can on the shelf.',
    reviewer: 'Barry Clarkson'
  },
  {
    id: 3,
    review: 'Sourcefour have being exceptional throughout this process, they have constantly gone above and beyond working with us on a very challenging and ever changing brief. They have supported us to think bigger and helped us to climb outside of our traditional NHS box. The whole Sourcefour team were very engaging, warm and welcoming whilst being experts in their trade. They very much bought into our ambitions and have helped us to achieve something that will support the wellbeing of our staff, enabling our people to care for the communities we serve. Kindness, Courage & Respect',
    reviewer: 'Paul Bunyan'
  },
]

onMounted(() =>{
  const sliders = document.querySelectorAll(`.reviews`)
  sliders.forEach((review) => {
    new Glide(review, {
      type: 'carousel',
      focusAt: 'center',
      autoplay: 5000,
      animationDuration: 1000,
      perView: 1,
      gap: 0,
      peek: 0,
    }).mount()
  })
})
</script>