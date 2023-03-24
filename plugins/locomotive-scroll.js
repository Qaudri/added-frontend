import LocomotiveScroll from 'locomotive-scroll';

export default ({ app }) => {
  if (process.client) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Set the scroll speed
      // Add any other options you want to configure
    });
    app.locomotiveScroll = scroll;
  }
};