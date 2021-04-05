<template>
  <main class="lista">
    <h1>This is a {{ tipoLista }} page</h1>
  </main>
</template>
<script>
export default {
  name: 'Lista',
  components: {
  },
  computed: {
    tipoLista() {
      return this.$route.name;
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
}
</style>