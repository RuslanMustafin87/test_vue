<template lang="pug">
    h2 {{indexItem + 1}}. {{titleItem}}
        hr
        button.btn.btn__delete(@click='removeItem(index)') Удалить
        button.btn.btn__change Изменить
        router-link(class='btn btn__view' tag='button' :to='{name: `view`, params: {title: titleItem}}') Посмотреть
</template>

<script>
export default {
  methods: {
    removeItem(id){
            this.$emit('remove-item', id)
        },
  }
}
</script>


<style lang="scss" src='./style.scss' scoped>

</style>
