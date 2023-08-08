<template lang="">
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="msg">
        <br> 
        <select name="country" id="" v-model="countrySelected">
            <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
        </select>
        <br>
        <label for="terms">
            Acepto los terminos y condiciones
            <input id="terms" name="terms" type="checkbox" v-model="agree" >
        </label>
        <br>
        <button type="submit">Enviar</button>  
    </form>

</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    const msg = ref('');
    const agree = ref(false);
    const countrySelected = ref('MX');
    const countries = ref([
        { code: 'AR', name: 'Argentina' },
        { code: 'BR', name: 'Brasil' }, 
        { code: 'US', name: 'Estados Unidos' },
        { code: 'MX', name: 'Mexico' },
    ])
    const onSubmit = () => {
        console.log(msg.value, agree.value, countrySelected.value);
    }
</script>
