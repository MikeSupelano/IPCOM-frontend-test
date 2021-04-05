<template>
  <router-link :to="rutaDestino">
    <div class="thumbnail">
      <img :src="thumbnail" alt="" class="thumbnail__img">
      <h2 class="thumbnail__title">
        {{ title }}
      </h2>
      <p class="thumbail__date">{{ clearDate }}</p>
    </div>  
  </router-link>
</template>
<script>
export default {
  name: "Thumbnail",
  props: ["thumbnail", "title", "date", "idPartido"],
  computed: {
    clearDate(){
      let isoDate = new Date(this.date).toISOString().split("T");
      return isoDate[0] + " / " + isoDate[1].split(".")[0]+"UTC";
    },
    rutaDestino(){
      return "/partido/"+this.idPartido;
    }
  },
}
</script>
<style lang="scss">
.thumbnail{
  background-color: gray;
  padding:5%;
  border-radius:5px;
  overflow: hidden;
  min-height: 100%;
  &__img{
    display: block;
    max-width: 100%;
    min-height: 183px;
  }
}
</style>
