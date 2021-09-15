<template>
  <div class="container">
    <h1 class='text-center' v-text='title'></h1>
    <table v-if='opinions.length > 0' class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
        </tr>
      </thead>
      <tbody>
        <OpinionTable v-for='(opinion, index) in opinions' :key='index' :indice='index' :opinion='opinion'/>
      </tbody>
    </table>
    <div v-else class="alert alert-danger my-5" role="alert">
      {{ alert }}
    </div>
  </div>
</template>


<script>
import OpinionTable from '@/components/OpinionTable.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: 'Administrando la Lista de Opiniones', 
      alert: 'No existen opiniones para mostrar.'
    }
  },
  components: {
    OpinionTable
  },
  computed: {
    ...mapState({
      opinions: state => state.opiniones
    }),
  }
}
</script>


<style>

</style>
