<template lang="pug">
    h2 {{indexItem + 1}}. {{titleItem}}
        hr
        input(type='text' v-if='showInputChange' v-model='titleChange' @keydown.enter='changeTitle(indexItem)')
        br
        button.btn.btn__delete(@click='removeItem(indexItem)') Удалить
        button.btn.btn__change(@click='showItem') Изменить
        router-link(class='btn btn__view' tag='button' :to='{name: `view`, params: {title: titleItem}}') Посмотреть
</template>

<script>

import {$eventBus} from '../../../main.js';

export default {
  data(){
    return {
      showInputChange: false,
      titleChange: ''
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
    removeItem(id){
      $eventBus.$emit('remove-item', id)
        },
    showItem(){
      this.showInputChange = true;
    },
    changeTitle(id){
      $eventBus.$emit('change-item', this.titleChange, id);
      this.showInputChange = false;
    }
  }
}
</script>


<style lang="scss" src='./style.scss' scoped>

</style>
