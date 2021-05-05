<template>
  <div class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link" >Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/products"  class="nav-link" >Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" >Acerca de</router-link>
                </li>

            </ul>
            <form class="d-flex">
                <input v-on:keyup.enter="searchProducts(sear)" class="form-control me-2" v-model.lazy="sear" type="search" placeholder="Buscar" aria-label="Search" >
                <button v-on:click="searchProducts(sear)" type="button" class="btn btn-outline-success">Buscar</button> 
            </form>
        </div>
    </div>
</nav>
  </div>
</template>

<script>
import router from '../router' 
export default {
  name: 'Header',
  methods:{
    searchProducts: function (con){
      router.push({ name: 'search', params: { concept: con} })}
}}
</script>