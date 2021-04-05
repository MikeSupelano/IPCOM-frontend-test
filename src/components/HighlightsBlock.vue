<template>
  <div class="highlight">
    <div class="highlight__embed" v-html="highlight.embed"></div>
    <h3 class="highlight__title">
      {{ highlight.title }}
    </h3>
  </div>  
</template>
<script>
export default {
  name: "Highlight",
  props: ["highlight"],
}
</script>
<style lang="scss">
.highlight{
  background-color: lightgray;
  box-shadow: 2px 6px 16px 0px rgba(0,0,0,0.67);
  &__title {
    padding:0.5rem;
    border: 1px solid darkgray;    
  }
}
</style>
