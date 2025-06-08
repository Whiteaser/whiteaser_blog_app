<template>
    <!-- 文章项 -->
    <article
        class="post-list"
        itemscope
        :itemtype="baseURL"
        :style="{ backgroundImage: `url(${post.cover_url})` }"
        @click="toPage(`blogs/detail/${post.id}`)"
    >
        <header class="header">
            <h1 class="title">
                {{ post.title }}
            </h1>
        </header>

        <section class="post-status">
            {{ post.summary }}
        </section>
    </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { baseURL } from '@/utils/request';
import type { Post } from '@/types/test'
defineProps<{
    post: Post
}>()
const router = useRouter()
const toPage = (path: string): void => {
    router.push(path)
}
</script>

<style scoped>
.post-list {
    display: flex;
    flex-direction: column;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin-bottom: 2rem;
    color: azure;
}
.post-list::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
        radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
    border-radius: 10px;
    z-index: 0;
}
.header,
.post-status {
    /* position: relative; */
    /* font-size: 1rem; */
    z-index: 1;
}
.title {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    font-weight: bold;
}

.post-status {
    margin-top: 1rem;
    font-size: 0.8rem;
}
</style>
