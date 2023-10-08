<template>
  <nav :class="menu_revealed ? 'bg-white duration-300 ease-in-out' : 'bg-transparent'" class="w-full absolute">
    <div class="flex container mx-auto items-center max-w-7xl justify-between px-6 py-4 w-full">
      <div class="w-36">
        <NavigationLogo></NavigationLogo>
      </div>

      <UiButtonsMenu @revealMenu="toggleMenu()" />

      <nav :class="menu_revealed ? 'translate-x-0' : '-translate-x-full'" class="md:h-fit z-100 md:static md:bg-transparent w-full md:w-fit fixed h-screen left-0 top-[65.5px] md:top duration-150 ease-in-out md:translate-x-0 bg-white">
        <ul class="grid grid-cols-1 place-items-center md:flex gap-8 md:gap-3 lg:gap-5 items-center px-6 pt-20 md:p-0">
          <li>
            <UiButtonsTertiary>home</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary>discipline +</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary>academy</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary>about us</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary @clicked="test">blog</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTalk class="text-primary hover:text-secondary duration-300 ease-in-out w-28 cursor-pointer" />
          </li>
        </ul>
      </nav>
    </div>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu_revealed: false,
    }
  },

  methods: {
    toggleMenu(){
      console.log('menu button clicked')
      this.menu_revealed = !this.menu_revealed
    },

    test(){
      console.log('menu button')
    }
  },

}
</script>

<style>

</style>