<template>
  <div class="card" style="width: 18rem;">
    <img :src="game.background_image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ game.name }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Rating: {{ game.rating }}</li>
      <li class="list-group-item">Released: {{ game.released }}</li>
      <li class="list-group-item">Updated: {{ game.updated }}</li>
    </ul>
    <div class="card-body">
      <button type='button' 
      class="btn btn-primary d-block mx-auto"
      data-bs-toggle='modal' 
      :data-bs-target="'#modal-' + game.id">
        Opinar
      </button>
    </div>
    <Modal :game='game'/>
  </div>
</template>


<script>
import Modal from '@/components/Modal.vue'
export default {
  props: ['game'],
  components: {
    Modal
  }
}
</script>


<style>

</style>
