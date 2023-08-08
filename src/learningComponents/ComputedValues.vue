<template lang="">
  <div>
    <input type="text" v-model="inputTxt" />
  </div>
  <div>
    <p>{{ reverse }}</p>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const inputTxt = ref("");
const reverse = computed((): string => {
  return inputTxt.value.split("").reverse().join("");
});
</script>
