<template lang='pug'>
  <div id="app">
    label Новое задание
    br
    input(type='text'  
          v-model='newTodo'
          @keydown.enter='addTodo')
    br
    ul.list
      li.list__item(v-for='(todo,index) in todos')
        item(:titleItem='todo' :indexItem='index')
  </div>
</template>

<script>
import item from './assets/components/item/item';

export default {
  name: 'app',
  data: ()=>(
    {
      todos: [],
      newTodo: '',
      id: 0
    }
  ),
  methods:{
    addTodo(){
      this.todos.push(this.newTodo)
    },
    removeItem(){
      this.todos.slice(id,1)
    }
  },
  components: {
    item
  },
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
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.list__item{
  
  display: table;
  margin: 30px auto;
}


</style>
