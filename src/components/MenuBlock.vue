<template>
  <div class="menu">
    <h1 class="menu-title">{{ title }}</h1>
    <select name="" class="menu__selector" @change="handleMenu">
      <option value="/">Selecciona un{{ tipoSeleccion }} </option>
      <option
        v-for="(item, index) in (listaSelect)"
        :key="index"
        :value="item.id">
        {{ item.name }}
      </option>
    </select>
    <router-link class="menu__link" :to="{name: title}">Ver todos</router-link>
  </div>  
</template>
<script>
export default {
  name: "Menu",
  props: ["title", "listaSelect"],
  methods: {
    handleMenu(e){
      const selectedId = e.target.value;
      let newRoute = '';
      if(selectedId === '/'){
        newRoute = '/'+this.title.toLowerCase()+'/';
      }else{
        newRoute = '/'+this.title.toLowerCase()+'/'+selectedId;
      }
       
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
<style lang="scss">
.menu{
  display:flex;
  flex-direction: column;
  align-items: stretch;
  padding:1rem;
  &__selector{
    margin:3px 0;
    font-family: 'Montserrat';
    font-size: 12px;
  }
  &__link{
    margin-top:3px;
    color:black;
    &:visited{
      color: black;
    }
  }
}
@media screen and (min-width:900px) {
  .menu{
    &__selector{
      font-size:16px;
    }
  }
}
</style>
