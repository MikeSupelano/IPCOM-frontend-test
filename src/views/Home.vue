<template>
  <main class="home">
    <grid-partidos-block class="home__hero" :hero="true"></grid-partidos-block>
    <grid-partidos-block class="home__all" :hero="false"></grid-partidos-block>
  </main>
</template>
<script>
import GridPartidosBlock from '../components/GridPartidosBlock.vue'
export default {
  name: 'Home',
  components: {
    GridPartidosBlock
  }
}
</script>
<style lang="scss">
.home{
  width:100%;
  padding:1rem;
  background-color:rgb(219, 219, 180);
  min-height:100vh;
  &__hero{
    padding:2rem 0;
    border-bottom:1px solid grey;
  }
}
</style>
