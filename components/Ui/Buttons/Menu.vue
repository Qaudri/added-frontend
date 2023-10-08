<template>
  <div class="md:hidden" @click="revealMenuEvent">
    <div class="w-8">
      <div :class="(mobile_nav ? 'transition transform rotate-45 my-0 w-8' : 'transition my-1.5 w-8') + ' ' + (BlockBackground ? 'bg-primary' : 'bg-primary')" class="block cursor-pointer" style="height: 3px;"></div>
      <div :class="(mobile_nav ? 'transition transform -rotate-45 my-0 w-8 -mt-0.5' : 'transition my-1.5 w-8') + ' ' + (BlockBackground ? 'bg-primary' : 'bg-primary')"  class="block cursor-pointer" style="height: 3px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    BlockBackground: Boolean,
    rotateMenu: Boolean
  },

  data(){
    return{
      mobile_nav: false,
    }
  },
  methods: {
    revealMenuEvent(){
      console.log('click function working')
      this.mobile_nav = !this.mobile_nav
      console.log('menu toggled')
      this.$emit("toggleMenu")
      console.log('menu emitted')
    }
  }
}
</script>