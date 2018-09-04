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
                
</template>

<script>
export default {
    data(){
        return {
            todos: [],
        }
    },
    props: {
        titleItem: {
            type: String,
            default: 'Title'
        },
        indexItem: {
            type: Number,
        }
    },
    methods: {
        addTodo(){
            this.todos.push()
        }
    }
}
</script>




