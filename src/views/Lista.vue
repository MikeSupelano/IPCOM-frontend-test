<template>
  <div class="lista">
    <h1>This is a {{ tipoLista }} page</h1>
  </div>
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
