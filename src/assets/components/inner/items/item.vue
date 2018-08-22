<template lang="pug">
    div
        h3 Заголовок {{n}}
        h4(:id='n') Пример
        button(@click='handleClick(n)') Кнопка
</template>

<script>
export default {
    props: {
        n: Number
    },
    methods:{
        handleClick(n){
            this.$emit('some-event', n)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
