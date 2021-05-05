<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '../src/components/header'
  export default {
  name: 'App',
  components: {
    Header
  }
}
</script>