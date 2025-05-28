<template>
    <!-- 文章项 -->
    <article
        class="post-list"
        itemscope
        :itemtype="url"
        :style="{ backgroundImage: `url(${article.coverImage})` }"
    >
        <header class="entry-header">
            <h1 class="entry-title">
                <a :href="`/article/${article.id}`" aria-label="查看文章详情">
                    {{ article.title }}
                </a>
            </h1>
        </header>

        <section class="post-status">
            <a :href="`/article/${article.id}`">
                {{ article.summary }}
            </a>
        </section>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const url = ref('https://whiteaserr.top')

defineProps<{
    article: {
        id: number
        title: string
        date: string
        summary: string
        coverImage: string
    }
}>()
</script>

<style scoped>
.post-list {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    position: relative;
    /* top: 200px; */
    /* color: #ffffff; */
    /* 添加半透明遮罩提升可读性 */
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
.entry-header,
.post-status {
    /* position: relative; */
    z-index: 1;
}
.entry-title {
    /* margin: 0 0 0.5rem; */
    font-size: 1.3rem;
    font-weight: bold;
}
.entry-title a {
    color: #ffffff;
    text-decoration: none;
}

.post-status {
    margin-top: 1rem;
    font-size: 0.95rem;
    color: #555;
}
.post-status a {
    color: #555;
    text-decoration: none;
}
.post-status a:hover {
    text-decoration: underline;
}

</style>
