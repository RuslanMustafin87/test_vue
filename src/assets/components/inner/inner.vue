<template lang="pug">
    .wrap
        ul
            li(v-for='n in 5')
                good-item(:n='n' @some-event='someFunc')
</template>

<script>
import goodItem from './items/item.vue'
export default {
    components: {
        goodItem
    },
    methods: {
        someFunc(n){
            console.log(n)

        }
    }
    
}
</script>


<style lang="scss" scoped>

</style>
