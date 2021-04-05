<template>
  <div class="grid-partidos" :class="{'hero': hero}">
    <h2 v-for="(item, index) in content" :key="index">
      {{item.title}}
    </h2>
  </div>  
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "GridPartidos",
  data() {
    return {
      idContent: -1
    }
  },
  props: ["hero"],
  computed: {
    ...mapGetters([
      "getPartidos",
      "getPartidosByLigaId",
      "getPartidosByEquipoId"
      ]),
    rutaActual() {
      return this.$route.path;
    },
    idRuta(){
      return this.$route.params.id || '';
    },
    content(){
      if(this.rutaActual === '/'){
        const partidos = this.getPartidos;
        if(this.hero){
          const partidosRandom = [];
          for (let i = 0; i<5; i++){
            partidosRandom.push(partidos[Math.floor(Math.random() * partidos.length)])
          }
          return partidosRandom;
        }else{
          return partidos;
        }
      }else if(this.rutaActual.includes("ligas")){
        return this.getPartidosByLigaId(this.idRuta);
      }else if(this.rutaActual.includes("equipos")){
        return this.getPartidosByEquipoId(this.idRuta);
      }
      else{
        return "none";
      }
    }
  },
}
</script>
<style lang="scss"></style>
