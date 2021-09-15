<template>
    <tr>
      <th scope="row">{{ indice + 1 }}</th>
      <td>{{ opinion.username }}</td>
      <td>{{ opinion.gameName }}</td>
      <td>{{ opinion.usersOpinion }}</td>
      <td>
        <button @click='deleteOpinion( indice )' type="button" class="btn btn-danger mx-3">Eliminar</button>
        <button @click='goToEdit( indice )' type="button" class="btn btn-info mx-3">Editar</button>
      </td>
    </tr>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  props: ['opinion', 'indice'],
  methods: {
    ...mapMutations(['deleteOpinion']),
    goToEdit( key ) {
      this.$router.push( `/admin/${ key }` )
    }
  }
}


</script>


<style>

</style>
