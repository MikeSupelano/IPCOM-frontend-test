<template>
    <header class="nav">
      <div class="nav-title">
        <router-link to="/"><h1>ScoreBatViewer</h1></router-link>
      </div>
      <menu-block class="nav-option" :title="'Ligas'" :lista-select="ligas"></menu-block>
      <menu-block class="nav-option" :title="'Equipos'" :lista-select="equipos"></menu-block>
      <router-link to="/equipos">Equipos</router-link>
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
<style lang="scss"></style>
