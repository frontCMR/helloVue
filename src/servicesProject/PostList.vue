<template lang="">
  <section class="postList">
    <h2>Post List</h2>
    <ul>
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </ul>
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
  max-width: 86rem;
  margin: 0px auto;
  
  ul{
    list-style: none;
  }

}
</style>
