<template lang="pug">
    div
        h1 Hello World!!! {{title}}
        button(@click='$router.go(-1)') Назад
</template>

<script>
export default {
    data(){
        return {
            title: this.$route.params.title
        }
    },
    mounted(){
        console.log(this.$route.params.id)
    }
}
</script>