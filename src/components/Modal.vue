<template>
    <div class="modal fade" :id="'modal-' + game.id" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Escribe tu opinion sobre el juego: {{ game.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="'exampleInputEmail1' + game.id" class="form-label">Nombre:</label>
              <input v-model='nombre' type="text" class="form-control" :id="'exampleInputEmail1' + game.id" aria-describedby="emailHelp" placeholder='Evan You'>
            </div>
            <div class="mb-3">
              <label for="'exampleInputPassword1' + game.id" class="form-label">Opiniones</label>
              <textarea v-model='opinion' type="text" class="form-control" :id="'exampleInputPassword1' + game.id" placeholder='Tu opinión debe ir aquí'></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button 
              @click='postOpinion({gameId: game.id, gameName: game.name, username: this.nombre, usersOpinion: this.opinion})' 
              data-bs-dismiss="modal"
              type="button" 
              class="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Modal',
  props: ['game'],
  data() {
    return {
      nombre: '',
      opinion: ''
    }
  },
  methods: {
    ...mapMutations(['postOpinion'])
  } 
}
</script>

<style scoped>

</style>
