<template>
  <div class="container">
    <h1 class='text-center' v-text='title'></h1>
    <div class="alert alert-danger my-5" role="alert">
      {{ alert }}
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: 'Lista de Opiniones',
      alert: 'No existen opiniones para mostrar.'
    }
  }
}
</script>


<style>

</style>
