<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ScoreBatViewer",
  methods: {
    ...mapActions(["initialize"]),
  },
  mounted() {
    this.initialize();
  }

}
</script>
<style lang="scss"></style>
