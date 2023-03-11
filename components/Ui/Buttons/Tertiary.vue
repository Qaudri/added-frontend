<template>
  <div>
    <button @click="emitclicked()" class="py-2 px-5 text-accent border-accent focus:text-white hover:text-white border-2  font-medium text-base xl:text-lg justify-center duration-500 ease-in-out rounded-xl outline-none focus:outline-none" :class="[flexdisplay ? 'flex w-full' : 'block w-fit', standout ? 'bg-primary  border-primary hover:bg-secondary focus:bg-secondary': 'bg-transparent hover:bg-primary focus:bg-primary hover:border-primary']">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    flexdisplay: Boolean
  },
  
  methods: {
    emitclicked(){
      this.$emit("clicked")
    }
  }
}
</script>

<style>

</style>