<template>
    <div id="content" class="main-inner site-content archives">
        <h1>Blogs</h1>

        <!-- 分类按钮区域 -->
        <div class="blog-list">
            <a href="/blog" class="category-button active">全部</a>
            <a href="/tags/tech" class="category-button">技术</a>
            <a href="/tags/game" class="category-button">游戏</a>
            <a href="/tags/website" class="category-button">站点</a>
            <a href="/tags/other" class="category-button">杂文</a>
        </div>

        <!-- 主体文章区域 -->
        <main id="main" role="main" class="site-main">
            <!-- 文章项 -->
            <ArticleItem
                v-for="article in articleInfo"
                :key="article.id"
                :article="article"
            />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ArticleItem from '@/views/Blog/components/BlogItem.vue'
const articleInfo = ref([
    {
        id: 'TypeScript',
        title: '测试文本',
        date: '2025-03-29T12:15:02Z',
        summary: '测试文本',
        coverImage: '/img/IMG_9744.jpg',
    },
    {
        id: 'TypeScript',
        title: '测试文本',
        date: '2025-03-29T12:15:02Z',
        summary: '测试文本',
        coverImage: '/img/IMG_9744.jpg',
    },
    {
        id: 'TypeScript',
        title: '测试文本',
        date: '2025-03-29T12:15:02Z',
        summary: '测试文本',
        coverImage: '/img/IMG_9744.jpg',
    },
    {
        id: 'TypeScript',
        title: '测试文本',
        date: '2025-03-29T12:15:02Z',
        summary: '测试文本',
        coverImage: '/img/IMG_9744.jpg',
    },
    {
        id: 'TypeScript',
        title: '测试文本',
        date: '2025-03-29T12:15:02Z',
        summary: '测试文本',
        coverImage: '/img/IMG_9744.jpg',
    },
    {
        id: 'TypeScript',
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: 'test',
        coverImage: '/img/IMG_8194.jpg',
    },
])
</script>
<style scoped>
#content {
    width: 80%;
    max-width: 900px;
    min-width: 200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    z-index: 0;
    h1 {
        text-align: center;
    }
}

.blog-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.category-button {
    display: inline-block;
    margin-right: 0.7rem;
    padding: 0.5rem 1rem;
    background-color: #eaeaea;
    color: #333;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.95rem;
    transition: background-color 0.3s;
}

.category-button:hover {
    background-color: #ccc;
}

.category-button.active {
    background-color: #333;
    color: #fff;
}
</style>
