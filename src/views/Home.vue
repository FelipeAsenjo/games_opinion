<template>
  <div>
    <h1 class='text-center' v-text='title'></h1>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <Card v-for='game in games' 
        :key='game.id' 
        :game='game'
        class='m-4 col col-4'/>
      </div>

    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      title: 'Lista de Juegos Disponibles',
    }
  },
  components: {
    Card,
  },
  computed: {
    ...mapState({
      games: state => state.games 
    })
  }
}
</script>
