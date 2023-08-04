<template lang="">
    <article class="postCard">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta, quas accusantium. Tempora laboriosam dolor, deleniti 
            ab minus molestiae exercitationem, quasi harum ut repellendus porro, 
            aliquam nulla expedita quidem quos maiores?
        </p>
        <PostBtn />
    </article>
</template>
<script lang="ts" setup>
    import PostBtn from './PostBtn.vue'
</script>
<style lang="css">
    .postCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 20%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid blueviolet;
    }
</style>