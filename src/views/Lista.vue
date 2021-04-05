<template>
  <main class="lista">
    <div class="lista__container-tags" v-for="(item, index) in content" :key="index">
      <router-link :to="'/'+tipoLista.toLowerCase()+'/'+item.id" class="lista__item">
        {{ item.name }}
      </router-link>
    </div>
  </main>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: 'Lista',
  components: {
  },
  computed: {
    ...mapGetters([
      "getLigas",
      "getEquipos"
    ]),
    tipoLista() {
      return this.$route.name;
    },
    content() {
      if(this.tipoLista === "Ligas"){
        return this.getLigas;
      }else if(this.tipoLista === "Equipos"){
        return this.getEquipos;
      }else{
        return []
      }
    }
  }
}
</script>
<style lang="scss">
.lista{
  width:100%;
  padding:1rem;
  background-color:rgb(219, 219, 180);
  min-height:100vh;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items: center;
  &__item{
    display:block;
    text-decoration:none;
    padding:0.5rem 1rem;
    background:white;
    color: black;
    border-radius: 3px;
    margin:5px;
    cursor:pointer;
    font-weight: 600;
    box-shadow: 2px 6px 16px 0px rgba(0,0,0,0.67);
    transition: all .3s ease-in-out;
    &:visited{
      color:black;
    }
    &:hover{
      transform: scale(1.05);
    }
  }
}
</style>