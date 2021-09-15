<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Games Opinions</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto pe-4">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Administracion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/opinions">Opiniones</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
<router-view/>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
