<template>
 <section class="games-list">
      <game-preview v-for="game in games" :game="game" :key="game.id"/>
    </section>
</template>

<script>
import gamePreview from './game-preview'
export default {
  props: {
    games: Array
  },
  components:{
      gamePreview
  }
}
</script>

<style>
</style>