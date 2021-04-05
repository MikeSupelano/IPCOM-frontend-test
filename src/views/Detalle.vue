<template>
  <main class="detalle">
    <h1>This is a detail page</h1>
    <grid-partidos-block hero="false"></grid-partidos-block>
  </main>
</template>
<script>
import GridPartidosBlock from '../components/GridPartidosBlock.vue'
export default {
  name: 'DetalleView',
  components: {
    GridPartidosBlock
  }
}
</script>
<style lang="scss">
.detalle{
  width:100%;
  padding:1rem;
  background-color:rgb(219, 219, 180);
  min-height:100vh;
}
</style>
