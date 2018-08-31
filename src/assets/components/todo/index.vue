<template lang="pug">
    h2 {{indexItem + 1}}. {{titleItem}}
        hr
        button.btn.btn__delete(@click='removeItem(index)') Удалить
        button.btn.btn__change Изменить
        router-link(class='btn btn__view' tag='button' :to='{name: `view`, params: {title: titleItem}}') Посмотреть
</template>

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
