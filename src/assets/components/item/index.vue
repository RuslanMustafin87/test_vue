<template lang="pug">
    div 
        label Новое задание
        br
        input(type='text'  
          v-model='newTodo'
          @keydown.enter='addTodo')
        br
        ul.list
            li.list__item(v-for='(todo,index) in todos')
                todo(@remove-item='removeTodo' 
                    @change-item='changeItem' 
                    :titleItem='todo' 
                    :indexItem='index')
</template>

<script>
import todo from '../todo/index';
import {$eventBus} from '../../../main.js';

export default {
    data(){
        return {
            todos: [],
            newTodo: '',
        }
    },
    // created(){
    //     $eventBus.$on('remove-item',(id)=>{
    //         this.todos.splice(index, 1)
    //     }),
    //     $eventBus.$on('change-item',(titleChange,id)=>{
    //         this.todos.splice(index, 1, titleChange)
    //     })
    // },
    methods: {
        addTodo(){
            this.todos.push(this.newTodo)
        },
        removeTodo(index){
            this.todos.splice(index, 1)
        },
        changeItem(titleChange, index){
            this.todos.splice(index, 1, titleChange)
        }
    },
    components: {
        todo
    }
}
</script>




