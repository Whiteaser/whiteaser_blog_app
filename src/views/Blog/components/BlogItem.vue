<template>
    <!-- 文章项 -->
    <article
        class="post-item"
        :style="{ backgroundImage: `url(${post.cover_url})` }"
        @click="toPage(`blogs/detail/${post.id}`)"
    >
        <header class="header">
            <h1 class="title">
                {{ post.title }}
            </h1>
        </header>

        <section class="post-brief">
            <p>
                {{ post.summary }}
            </p>
        </section>
    </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Post } from '@/types/type'
defineProps<{
    post: Post
}>()
const router = useRouter()
const toPage = (path: string): void => {
  router.replace({ path: '/' }) // 先跳转到首页或其他空路由
  setTimeout(() => {
    router.push(path)
  }, 0)
}
</script>

<style scoped>
.post-item {
    display: flex;
    flex-direction: column;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 16px;
    margin-bottom: 16px;
    color: azure;
    transition: ease 0.4s;
}

.post-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
        radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
    border-radius: 10px;
    z-index: 0;
}

.post-item:hover{
  transform: scale(1.02);
}

.header,
.post-brief {
    z-index: 1;
}

.title {
    letter-spacing: 1px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
}

.post-brief {
    letter-spacing: 1px;
    text-indent: 38px;
    margin:0 18px;
    line-height: 25px;
    font-size: 16px;
}
</style>
