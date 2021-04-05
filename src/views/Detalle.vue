<template>
  <main class="detalle">
    <h3 class="detalle__title">{{this.$route.name}}:</h3>
    <h1 class="detalle__name">{{ title.name }}</h1>
    <grid-partidos-block hero="false"></grid-partidos-block>
  </main>
</template>
<script>
import { mapGetters } from "vuex";
import GridPartidosBlock from '../components/GridPartidosBlock.vue';
export default {
  name: 'DetalleView',
  components: {
    GridPartidosBlock
  },
  computed: {
    ...mapGetters([
      "getLigaById",
      "getEquipoById"
    ]),
    rutaActual() {
      return this.$route.path;
    },
    idRuta(){
      return this.$route.params.id || '';
    },
    title(){
      if(this.rutaActual.includes("ligas")){
        return this.getLigaById(this.idRuta);
      }else if(this.rutaActual.includes("equipos")){
        return this.getEquipoById(this.idRuta);
      }else{
        return {name: ""};
      }
    }
  },
}
</script>
<style lang="scss">
.detalle{
  width:100%;
  padding:1rem;
  background-color:rgb(219, 219, 180);
  min-height:100vh;
  &__title{
    text-align: center;
  }
  &__name{
    text-align: center;
    margin-bottom:2rem;
  }
}
</style>
