<template>
    <header class="nav">
      <div class="nav__title">
        <router-link to="/"><h1>ScoreBatViewer</h1></router-link>
      </div>
      <menu-block class="nav__option" :title="'Ligas'" :lista-select="ligas"></menu-block>
      <menu-block class="nav__option" :title="'Equipos'" :lista-select="equipos"></menu-block>
    </header>   
</template>
<script>
import MenuBlock from './MenuBlock.vue';
import { mapState } from "vuex";
export default {
  name: "Nav",
  components: { MenuBlock },
  computed: {
    ...mapState(["ligas","equipos"])
  },
}
</script>
<style lang="scss">
.nav{
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  &__title{
    flex-basis:100%;
    text-align: center;
    background-color: black;
    padding: 0.5rem 1rem;
    h1{
      color:white;
    }
    a{
      text-decoration: none;  
      color:black;
    }
  }
  &__option{
    max-width: 50%;
    flex-basis: 100%;
    background-color: gray;
  }
}

@media screen and (min-width:900px) {
  .nav{
    &__title{
      display:flex;
      align-items: center;
      justify-content: center;
      max-width:33.4%;
    }
    &__option{
      max-width:33.3%;
    }
  }
}
</style>
