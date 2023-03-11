<template>
  <div>
    <button @click="emitclicked" class="font-medium text-sm xl:text-base 2xl:text-lg text-accent hover:text-primary ease-in-out duration-500 border-b border-transparent hover:border-primary select-none text-left outline-none focus:outline-none focus:border-primary">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitclicked(){
      this.$emit("clicked")
    }
  }
}
</script>

<style>

</style>