<template lang="">
    <article class="post">
        <h2>{{props.post.title}}</h2>
        <p>
            {{props.post.body}}
        </p>
        <button @click="greet">Di hola</button>
    </article>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
    interface IPots {
        id: number;
        title: string;
        body: string;
    }
    export default defineComponent({
        name: 'PostDetail',
        props: {
            post: {
                type: Object as PropType<IPots>,
                required: true
            }
        }, 
        emits: ['sentMsg'],
        setup(props, { emit }) {
            const greet = () => {
                emit('sentMsg', 'Hola desde el padre')
            }
            return {
                props,
                greet
            }
        }
    })
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