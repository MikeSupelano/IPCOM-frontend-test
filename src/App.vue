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
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
body{
  font-family: 'Montserrat';
  font-size: 16px;
}
h1,h2,h3{
  font-weight:600;
}
</style>
