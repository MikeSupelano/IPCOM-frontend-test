<template>
  <div class="menu">
    <h1 class="menu-title">{{ title }}</h1>
    <select name="" class="menu-selector" @change="handleMenu">
      <option value="/">Selecciona un{{ tipoSeleccion }} </option>
      <option
        v-for="(item, index) in (listaSelect)"
        :key="index"
        :value="item.id">
        {{ item.name }}
      </option>
    </select>
    <router-link class="menu-link" :to="{name: title}">Ver todos</router-link>
  </div>  
</template>
<script>
export default {
  name: "Menu",
  props: ["title", "listaSelect"],
  methods: {
    handleMenu(e){
      const selectedId = e.target.value;
      const newRoute = '/'+this.title.toLowerCase()+'/'+selectedId;
      this.$router.push({path: newRoute});
    }
  },
  computed: {
    tipoSeleccion(){
      return this.title === "Ligas" ? 'a liga' : ' equipo'
    }
  },
}
</script>
<style lang="scss"></style>
