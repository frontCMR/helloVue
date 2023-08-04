<template lang="">
    <h3>Counter</h3>
    <p>{{counter}}</p>
    <button @click="increment">Incrementar</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CounterOption',
    data() {
        let counter = 0
        return {
            counter
        }
    }, 
    methods: {
        increment() {
            this.counter++
        }
    }
})
</script>
<style lang="">
    
</style>