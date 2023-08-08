<template lang="">
  <article class="post">
    <h2>{{ props.post.title }}</h2>
    <p>
      {{ props.post.body }}
    </p>
    <input type="text" v-model="msg" />
    <button @click="greet">Di hola</button>
  </article>
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface IPots {
  id: number;
  title: string;
  body: string;
}

// eslint-disable-next-line no-undef
const props = defineProps<{ post: IPots }>();

// eslint-disable-next-line no-undef
const emit = defineEmits(["sentMsg"]);

const msg = ref("");
const greet = () => {
  emit("sentMsg", msg.value);
};
</script>
<style>
.post {
  width: 300px;
  height: 100px;
  padding: 14px;
  border-radius: 8px;
  background-color: antiquewhite;
}
</style>
