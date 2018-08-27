<template lang="pug">
    div 
        h2 {{indexItem + 1}}. {{titleItem}}
        hr
        button.btn.btn__delete(@click='removeItem(index)') Удалить
        button.btn.btn__change Изменить
        button.btn.btn__view Посмотреть
</template>

<script>
export default {
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
        removeItem(id){
            this.$emit('remove-item', id)
        }
    }
}
</script>


<style lang="scss" scoped>
    .btn{
  cursor: pointer;
  height: 35px;
  width: 110px;
  margin-right: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}
.btn__delete{
  background-color: #ed4040;
}
.btn__change{
  background-color: #d6e31b;
}
.btn__view{
  background-color: #3b3ee3;
}
</style>

