<template lang='pug'>
  <div id="app">
    comp
    inner 
    span {{n}}
  </div>
</template>

<script>
import {$eventBus} from './main.js'
import comp from './assets/components/comp.vue';
import inner from './assets/components/inner/inner.vue';

export default {
  name: 'app',
  data: ()=>(
    {
      n: 0
    }
  ),
  created(){
    $eventBus.$on('some-event', x=>{
      this.n = x;
    })
  },
  components: {
      comp,
      inner
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
