import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    data: {
        // Accessible from all over your application
    },
    methods: {
        changeAge (age) {
            this.$emit('ageWasEdited', age)
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
