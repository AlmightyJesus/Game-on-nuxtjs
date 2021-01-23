<template>
  <section class="game-menu">
    <button
      class="play-button"
      @click="checkStore"
      @mouseenter="toggleMenu(true)"
      @mouseleave="toggleMenu(false)"
    >Play</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    checkStore() {
      this.$emit('checkStore')
    },
    toggleMenu(isOver) {
        this.isMenuOpen = isOver
        console.log(this.isMenuOpen);
        
    }
  }
}
</script>

<style>
</style>