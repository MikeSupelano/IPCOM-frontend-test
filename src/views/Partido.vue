<template>
  <main class="partido-view">
    <partido-block
      :partido="partido">
    </partido-block>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import PartidoBlock from '../components/PartidoBlock.vue';
export default {
  name: 'PartidoView',
  components: {
    PartidoBlock
  },
  computed: {
    ...mapGetters([
      "getPartidoById",
      ]),
    idRuta(){
      return this.$route.params.id || '';
    },
    partido(){
      return this.getPartidoById(this.idRuta);
    }
  },
}
</script>

<style lang="scss">
.partido-view{
  width:100%;
  padding:1rem;
  background-color:rgb(219, 219, 180);
  min-height:100vh;
}
</style>