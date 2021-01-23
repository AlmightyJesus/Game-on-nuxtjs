<template>
  <div class="container">
    
    <h1 class="header">Pick your game:</h1>
    <games-list :games="games"/>
  </div>
</template>

<script>
import gameService from '../services/game-service'
import gamesList from '../components/games-list'
export default {
  head() {
    return {
      title: 'Game On',
      meta: [
        {
          hid: 'homepage',
          name: 'homepage',
          content: 'Best place for online 1v1 board games'
        }
      ]
    }
  },
  data(){
    return{
      games:null
    }
  },
  created(){
    this.games = gameService.getGames()
  },
  components: {
    gamesList,
  }
}
</script>

<style>
</style>
