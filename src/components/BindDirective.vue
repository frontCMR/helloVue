<template lang="">
    <p :style="{ backgroundColor: bg }">Mensaje enviado</p>
    <button @click="bg = 'red'">Inital background</button>
    <button @click="bg = 'yellow'">Change background</button>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    const bg = ref('red'); 
</script>

<style>

</style>
