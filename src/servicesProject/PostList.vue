<template lang="">
  <section class="postList">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { PostService } from "./services/PostService";
import PostItem from "./PostItem.vue";

const service = new PostService("https://jsonplaceholder.typicode.com/posts");
const posts = service.getPosts();

onMounted(async () => {
  await service.fetchAllPosts();
});
</script>
<style lang="scss" scoped>
.postList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0px;
  color: $blue;
}
</style>
