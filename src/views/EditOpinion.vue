<template>
  <div class="container">
    <h1 class='text-center' v-text='title + game'></h1>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre:</label>
        <input v-model='username' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Opiniones</label>
        <textarea v-model='opinion' class="form-control" id="exampleInputPassword1"></textarea>
      </div>
      <button @click='goToAdmin()' type="button" class="btn btn-primary me-2">Regresar</button>
      <button @click='updateOpinion({ id, username, opinion }), goToAdmin()' type="button" class="btn btn-info mx-2">Guardar</button>
    </form>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      title: 'Editando la opinion de: ',
      game: this.$store.getters.fetchEdit( this.id ).gameName,
      username: this.$store.getters.fetchEdit( this.id ).username,
      opinion: this.$store.getters.fetchEdit( this.id ).usersOpinion
    }
  },
  methods: {
    ...mapMutations(['updateOpinion']),
    goToAdmin() {
      this.$router.push( `/admin` )
    }
  }
}
</script>


<style>

</style>
