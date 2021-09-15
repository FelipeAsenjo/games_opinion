<template>
  <Navbar />
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapMutations(['fetchedGames'])
  },
  created() {
    fetch('https://api.rawg.io/api/games?key=05fe1c9481164772818a1aa5620c6031')
      .then( res => res.json() )
      .then( data => this.fetchedGames( data.results ) )
  }
}
</script>

<style>

</style>
