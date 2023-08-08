<template lang="">
    <ul>
        <li v-for="(item, index) in countries" :key="index">{{ item.name }} - {{ item.code }}</li>
    </ul>
</template>
<script lang="ts" setup>
    import { ref, Ref } from 'vue'
    interface Country {
    code: string;
    name: string;
    }
    const countries: Ref<Country[]> = ref([
        {
            code: 'AR',
            name: 'Argentina',
        },
        {
            code: 'BR',
            name: 'Brasil',
        },
        {
            code: 'US',
            name: 'Estados Unidos',
        },
        {
            code: 'MX',
            name: 'Mexico',
        },
        {
            code: 'FR',
            name: 'Francia',
        }
    ])
</script>
