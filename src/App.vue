<template>
  <div id="app">
    <nav-block></nav-block>
    <router-view/>
  </div>
</template>
<script>
import NavBlock from './components/NavBlock.vue';
import { mapActions} from "vuex";

export default {
  name: "ScoreBatViewer",
  components: { NavBlock },
  methods: {
    ...mapActions(["initialize"]),
  },
  mounted() {
    this.initialize();
  }

}
</script>
<style lang="scss"></style>
