<template lang="">
  <li class="postItem">
    <router-link :to="{name:'postDetail', params:{id:props.post.id}}"> 
      <h1>{{ props.post.title }}</h1>
    </router-link>
  </li>
</template>
<script lang="ts" setup>
import { Post } from "./ts/post.model";
interface IProps {
  post: Post;
}
// eslint-disable-next-line no-undef
const props: IProps = defineProps<{ post: Post }>();
</script>
<style lang="scss" scoped>
.postItem {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #c4c4c4;
  background-color: antiquewhite;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  a{
    text-decoration: none;
    color: black;
  }
  h1 {
    text-align: center;
    font-size: 16px;
  }
}
.postItem:hover{
  transform: scale(1.01);
  background-color: rgb(212, 116, 212);
  border-bottom: 1px solid rgb(212, 116, 212);
  border-radius: 8px;
}
</style>
