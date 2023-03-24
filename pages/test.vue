<template>
  <div>
    <div class="container bg-accent">
      <div class="content">
        <div class="h-full w-full bg-blue-500"></div>
      </div>
    </div>
  </div>

</template>

<style>
.container {
  width: 100%;
  height: 100vh; /* Set the height of the container to the viewport height */
  overflow: hidden; /* Disable vertical scrolling */
  position: relative;
}

.content {
  width: 200%; /* Set the width of the content to twice the container width */
  height: 50vh; /* Set the height of the content to half the viewport height */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex; /* Use flexbox to align content horizontally */
  transition: transform 0.5s ease-out; /* Add a transition for smooth scrolling */
}

/* Add styles for your content */
.content h1 {
  font-size: 4rem;
  margin: auto;
}
</style>

<script>
definePageMeta({
  layout: false,
})
export default {
  data() {
    return {
      scrollEnabled: false,
      contentHeight: 0,
      windowHeight: 0,
    };
  },
  mounted() {
    // Add an event listener for the scroll event
    window.addEventListener('scroll', this.handleScroll);
    this.contentHeight = this.$refs.content.clientHeight;
    this.windowHeight = window.innerHeight;
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const container = document.querySelector('.container');
      const content = document.querySelector('.content');
      const containerRect = container.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      const contentCenter = contentRect.top + contentRect.height / 2;
      const scrollPosition = window.scrollY;
      const maxScroll = this.contentHeight - this.windowHeight;
      // Disable vertical scrolling when the content is in the center of the container
      if (contentCenter >= containerCenter) {
        container.style.overflow = 'hidden';
      } else {
        container.style.overflow = 'visible';
      }
      // Enable horizontal scrolling when the user has scrolled through all the content
      if (!this.scrollEnabled && scrollPosition >= maxScroll) {
        // Enable horizontal scrolling
        this.scrollEnabled = true;
        content.style.overflowX = 'auto';
      }
      // Set the horizontal scroll position of the content based on the vertical scroll position
      if (this.scrollEnabled) {
        content.style.transform = `translateX(-${scrollPosition}px)`;
      }
    },
  },
};
</script>
