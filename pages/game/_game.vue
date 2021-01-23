<template>
  <div class="pre-game-screen">
    <nuxt-link to="/" class="home-link">← Back to Home</nuxt-link>
    <section class="top-banner flex col">
      <div class="banner-top flex space-between center">
        <h3 class="game-name">{{gameName}}</h3>
        <game-menu @checkStore="checkStore" />
      </div>
      <img :src="require('@/assets/img/'+game.img)" :alt="'Play '+ game.name" />
    </section>
    <section class="game-rules">
      <h4>Game Rules:</h4>
      <p class="game-rules">{{game.rules}}</p>
    </section>
  </div>
</template>

<script>
import gameService from '@/services/game-service'
import gameMenu from '@/components/game-menu'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      game: null
    }
  },
  created() {
    this.game = gameService.getGameByName(this.$route.params.game)
  },
  methods: {
    ...mapMutations({
      updateStore:'user/showUserWorks'
    }),
    checkStore() {
      // const user = this.$store.state.user
      // console.log(this.$store.state);
      this.updateStore('mul')
    //   const newUser = 'now im Shlomo'
      // this.$store.commit({ type: 'user/showUserWorks', newUser })
    //   console.log(this.$store.state.user.user)
    //   console.log(this.$store)
    }
  },
  computed: {
    gameName() {
      const name = this.game.name
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  },
  components:{
    gameMenu
  }
}
</script>