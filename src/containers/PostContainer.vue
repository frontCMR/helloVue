<template lang="">
    <section class="postContainer">
        <PostCard />    
        <PostCard />    
        <PostCard />    
    </section>
</template>

<script lang="ts" setup>
    import PostCard from "../components/PostCard.vue";
</script>
<style lang="css">
    .postContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        width: 100%;
    }
</style>