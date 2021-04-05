<template>
  <main class="partido">
    <div class="partido__cabecera">
      <div class="partido__title">
        <h1>{{ partido.title }}</h1>
      </div>
      <div class="partido__competicion">
        <h2>{{ partido.competition.name }}</h2>
      </div>
    </div>
    <div class="partido__embed" v-html="partido.embed"></div>
    <h2 class="partido__ttl-highlights">Videos:</h2>
    <div class="partido__containerHL">
      <highlights-block v-for="(item, index) in partido.videos" 
        :key="index" 
        :highlight="item"
        class="partido__highlights">
      </highlights-block>
    </div>
    
  </main>  
</template>
<script>
import HighlightsBlock from './HighlightsBlock.vue'
export default {
  components: { HighlightsBlock },
  name: "Partido",
  props: ["partido"]
}
</script>
<style lang="scss">
.partido{
  text-align: center;
  &__competicion{
    margin-bottom:1rem;
  }
  &__embed{
    margin-bottom:2rem;
  }
  &__containerHL{
    display:flex;
    flex-direction:column;
    margin-top:0.5rem;
    & > * {
      flex-basis: 100%;
    }
    & > * + * {
      margin-top:1.5rem;
    }
  }
}

@media screen and (min-width:900px) {
  .partido{
    &__containerHL{
      flex-direction:row;
      flex-wrap:wrap;
      justify-content: space-around;
      & > * {
        max-width: 30%;
        margin-top:1rem;
      }
    }
  }
}
</style>
