<template lang="">
    <section class="postContainer">
        <PostDetail v-for="post in postList" :key="post.id" :post="post" @sentMsg="showAlert" />
    </section>
</template>
<script lang="ts" setup>
    import PostDetail from './PostDetail.vue';
    interface IPost {
        id: number;
        title: string;
        body: string;
    }
    const postList: IPost[] = [
        {
            id: 1, 
            title: 'Titulo 1',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, 
        {
            id: 2,
            title: 'Titulo 2',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, 
        {
            id: 3,
            title: 'Titulo 3',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 4,
            title: 'Titulo 4',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ]

    const showAlert = (msg:string) => {
        alert(msg)
    }

</script>
<style >
    .postContainer{
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        gap: 10px;
    }
</style>