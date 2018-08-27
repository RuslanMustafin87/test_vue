import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


// const obj = {
//   name: 'ruslan',
//   methods: {
//     name: 'dima',
//     func(){
//       console.log(this.name)
//     }
//   }
// }

// obj.methods.func.call(obj)