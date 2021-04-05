<template>
  <div class="grid-partidos" :class="{'hero': hero}">    
    <thumbnail-block v-for="(item) in content" :key="item.id"
      :title="item.title"
      :date="item.date"
      :thumbnail="item.thumbnail"
      :idPartido="item.id"
      class="grid-partidos__partido">      
    </thumbnail-block>
  </div>  
</template>
<script>
import { mapGetters } from "vuex";
import ThumbnailBlock from './ThumbnailBlock.vue';
export default {
  components: { ThumbnailBlock },
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
<style lang="scss">
.grid-partidos{
  width:100%;
  display:flex;
  
  align-items: center;
  justify-content:space-around;
  flex-direction:column;
  & > * + *{
    margin-top:1rem;
  }
  a{
    text-decoration: none;
    color: black;
    display: block;
    :visited{
      color: blue;
    }
  }
}
@media screen and (min-width:900px) {
  .grid-partidos{
    flex-direction: row;
    flex-wrap:wrap;
    & > * + * {
      margin-left:1rem;
    }
    &__partido{
      margin-top:1rem;
      max-width: 25%;
      align-self:stretch;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover{
        transform: scale(1.05);
      }
    }
  }
}

@media screen and (min-width:1200px) {
  .grid-partidos{
    &__partido{
      max-width: 18%;
    }
  }

}
</style>
