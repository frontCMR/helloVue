<template lang="">
  <article class="postItem">
    <h1>{{ props.post.title }}</h1>
    <p>{{ props.post.body }}</p>
  </article>
</template>
<script lang="ts" setup>
import { Post } from "./ts/post.model";
interface IProps {
  post: Post;
}
// eslint-disable-next-line no-undef
const props: IProps = defineProps<{ post: Post }>();
</script>
<style lang="css" scoped>
.postItem {
  width: 250px;
  height: 250px;
  padding: 10px;
  border-radius: 8px;
  background-color: antiquewhite;
}
</style>
