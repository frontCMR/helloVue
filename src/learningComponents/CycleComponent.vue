<template lang="">
    <h1>Hola Vue</h1>
</template>
<script lang="ts" setup>
    import { onMounted, onUpdated } from 'vue';
    console.log("Component created.");
    onMounted(() => {
        console.log('Component mounted.')
    })
    onUpdated(() => {
        console.log('Component updated.')
    })
</script>
<style lang="">
    
</style>