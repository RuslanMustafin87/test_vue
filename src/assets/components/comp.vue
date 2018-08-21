<template lang="pug">
        //- .slider
        //-     .slider__container
        //-         ul.slider__items
        //-             -   for (var i = 1;i <= 3; i++)
        //-                     li.slider__item(class=`slider__item-${i}`)
        div
            
            form.form
                input(type='text' v-model='text')
                .text text: {{text}}
                br
                <input type='radio' class='radio__input' id='radio_1' name='radio' value='Yes' v-model='radio'>
                label(class='radio__label radio__label-1' for='radio_1')
               
                <input type='radio' class='radio__input' id='radio_2' name='radio' value='No' v-model='radio'>
                label(class='radio__label radio__label-2' for='radio_2')
                span {{radio}}
                select(v-model='select')
                    option() 1
                    option 2
                    option 3
                span {{select}}
</template>

<script>
export default {
        data: ()=>{
            return {
                title: 'Hello world!!!',
                text: 'tuyrert',
                radio: 'Yes',
                select: []
            }
    }
}
</script>

<style lang="scss" src='./style.scss' scoped>
</style>
