<template>
    <!-- 文章项 -->
    <article class="post-item" @click="toPage(`blogs/detail/${post.id}`)">
        <div class="blur-mask">
            <img :src="post.cover_url" alt="背景图" />
        </div>
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
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 15px;
    box-shadow: 0 5px 10px #00000050;
    padding: 16px;
    margin-bottom: 16px;
    color: azure;
    transition: ease 0.4s;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

/* 列表阴影 */
.post-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0) 33%,
        rgba(0, 0, 0, 0.3) 166%
    );
    border-radius: 10px;
    z-index: 0;
}

/* 渐变遮罩 */
.blur-mask {
    position: absolute;
    height: 100%;
    right: 0;
    width: 600px;
    top: 0;
    pointer-events: none;
    z-index: -1;
    filter: brightness(0.5);
    -webkit-mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0) 100%
    );
    mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0) 100%
    );
    display: flex;
    align-items: center;
    img {
        width: 100%;
        pointer-events: none;
        -webkit-user-drag: none;
        border-style: none;
        border: 0;
        max-width: 100%;
    }
}

/* 遮罩阴影 */
.blur-mask::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image:
        radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
        radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
}

.post-item:hover {
    transform: scale(1.02);
}

.title {
    font-family: 'ZCOOLXiaoWei-Regular';
    letter-spacing: 0px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: normal;
}

.post-brief {
    color: #b0b0b0;
    letter-spacing: 1px;
    /* text-indent: 38px; */
    /* margin: 0 18px; */
    line-height: 25px;
    font-size: 16px;
}
</style>
