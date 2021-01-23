<template>
  <div class="game-preview flex col center" v-if="game">
    <nuxt-link :to="gameLink" class="game-link flex center">
      <img :src="require('@/assets/img/'+game.img)" :alt="'Play '+ game.name" />
    </nuxt-link>
    <nuxt-link class="game-name-link" :to="gameLink">{{gameName}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    game: Object
  },
  computed: {
    gameName() {
      const name = this.game.name
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    gameLink() {
      return `/game/${this.game.name}`
    }
  }
}
</script>

<style>
</style>