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
                .radioButton
                    <input type='radio' class='radio__input' id='radio_1' name='radio' value='Yes' v-model='radio'>
                    label(class='radio__label radio__label-1' for='radio_1')
                    br
                    <input type='radio' class='radio__input' id='radio_2' name='radio' value='No' v-model='radio'>
                    label(class='radio__label radio__label-2' for='radio_2')
                span {{radio}}
                select(v-model='select')
                    option(:value='name[0]') 1
                    option(:value='name[1]') 2
                    option(:value='name[2]') 3
                span {{select}}
                br
                input(type='checkbox' v-model='check' value='option1')
                input(type='checkbox' v-model='check' value='option2')
                input(type='checkbox' v-model='check' value='option3')
                br
                span {{check}}
                br
                span {{helloText}}
                slot(name='default')
                slot(name='exemple_1')
                slot(name='exemple_2')
                //- slot(name='exemple_3')
                
</template>

<script>
export default {
        data: ()=>{
            return {
                title: 'Hello world!!!',
                text: 'tuyrert',
                radio: 'Yes',
                select: '',
                name: ['ruslan','katya','roma'],
                check: []
            }
        },
        props: {
            helloText: String
        }
}
</script>

<style lang="scss" src='./style.scss' scoped>
</style>
