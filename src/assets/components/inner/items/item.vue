<template lang="pug">
    div
        h3 Заголовок {{n}}
        h4(:id='n') Пример
        button(@click='handleClick(n)') Кнопка {{n}}
</template>

<script>
import {$eventBus} from '../../../../main.js';
export default {
    props: {
        n: Number
    },
    methods:{
        handleClick(n){
            $eventBus.$emit('some-event', n);
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
