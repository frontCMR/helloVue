<template lang="">
    <section class="postDetailContainer">
        <article class="postDetailContainer___postDetail">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </article>
        <router-link class="btnBack" :to="{ name: 'home'}">go back</router-link>
    </section>
</template>
<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import {useRoute} from "vue-router";
    import { PostService } from "../services/PostService";

    const route = useRoute();
    const postId = ref(route.params.id);
    const service = new PostService(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
    const post = service.getPost();
    onMounted(async () => {
        await service.fetchPost();
    })
</script>
<style lang="scss">
    .postDetailContainer{
        display: flex;
        flex-direction: column;
        gap: 20px;  
        align-items: center;

        max-width: 86rem;
        margin: 0px auto;
        padding: 20px;

        &___postDetail{
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            width: 50%;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            border: 1px solid #c3c3c3;
        }
    }
    .btnBack {
        display: inline-block;
        padding: 8px;
        font-weight: 600;
        text-decoration: none;
        color: black;
        border-radius: 8px;
        background-color: powderblue;
    }
</style>