<template lang="">
    <h3>Counter composition</h3>
    <p>{{counter}}</p>
    <button @click="increment">Incrementar</button>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'
    let counter: Ref<number> = ref(0)
    const increment = (): void => {
        counter.value++
    }
</script>
