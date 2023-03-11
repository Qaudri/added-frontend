<template>
  <nav class="w-full z-100 fixed">
    <div class="flex container mx-auto items-center justify-between px-6 py-4 w-full">
      <div class="w-36">
        <NavigationLogo @logoClicked="reloadPage()"></NavigationLogo>
      </div>

      <UiButtonsMenu @revealMenu="toggleMenu()" />

      <nav :class="menu_revealed ? 'translate-x-0' : '-translate-x-full'" class="md:h-fit z-100 md:static md:bg-transparent w-full md:w-fit fixed h-screen left-0 top-[65.5px] md:top duration-150 ease-in-out md:translate-x-0 bg-white">
        <ul class="grid grid-cols-1 place-items-center md:flex gap-5 md:gap-3 lg:gap-5 items-center px-6 pt-20 md:p-0">
          <li>
            <UiButtonsSecondary :white_text="true" class="text-white">Projects</UiButtonsSecondary>
          </li>
          <li>
            <UiButtonsSecondary :white_text="true">Marketplace</UiButtonsSecondary>
          </li>
          <li>
            <UiButtonsSecondary :white_text="true">Find Artisans</UiButtonsSecondary>
          </li>
          <li>
            <UiButtonsSecondary :white_text="true" @clicked="$router.push({path: '/login'})">Sign In</UiButtonsSecondary>
          </li>
          <li >
            <UiButtonsPrimary @clicked="$router.push({path: '/signup'})">Sign Up</UiButtonsPrimary>
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

  props: {
    keep_button_hovered: Boolean
  },

  methods: {
    toggleMenu(){
      this.menu_revealed = !this.menu_revealed
    },
  }
}
</script>

<style>

</style>