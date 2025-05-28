<template>
    <div id="content" class="main-inner site-content archives">
        <h1>BlogPage</h1>

        <!-- 分类按钮区域 -->
        <div class="categories-list">
            <a href="/archives" class="category-button active">全部</a>
            <a href="/categories/tech" class="category-button">技术</a>
            <a href="/categories/game" class="category-button">游戏</a>
            <a href="/categories/website" class="category-button">站点</a>
            <a href="/categories/other" class="category-button">杂文</a>
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
import { ref } from "vue";
import ArticleItem from '@/components/ArticleItem.vue'
const articleInfo = ref([
    {
        id: 1,
        title: '测试文本',
        date: '2025-03-29T12:15:02Z',
        summary:
            '原生主题是什么样子这就不再赘述了，可以点 https://shiyin.cafe/archives/7K4z8CUI 查看。以下更新只做在原生主题之上的修改总结。',
        coverImage: '/img/IMG_9744.jpg',
    },
    {
        id: 2,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
    {
        id: 3,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
    {
        id: 4,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
    {
        id: 5,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
    {
        id: 6,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
    {
        id: 7,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
    {
        id: 8,
        title: '测试文本',
        date: '2025-01-01T00:00:00Z',
        summary: '谁知道我以后会在这里更新什么东西',
        coverImage: '/img/IMG_8194.jpg',
    },
])
</script>
<style scoped>
/* 主容器 */
#content {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    z-index: 0;
    h1 {
        text-align: center;
    }
}

/* 分类按钮列表 */
.categories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.category-button {
    display: inline-block;
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

/* 文章卡片样式 */
.post-list {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 1.5rem;
    align-items: center;
}

/* 移动端单列显示 */
/* @media (max-width: 600px) {
    .post-list {
        grid-template-columns: 1fr;
    }
} */

/* 标题 */
.entry-title {
    margin: 0 0 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
}

.entry-title a {
    color: #111;
    text-decoration: none;
}

.entry-title a:hover {
    text-decoration: underline;
}

/* 时间信息 */
.p-time {
    font-size: 0.85rem;
    color: #999;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

/* 摘要 */
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

/* 阅读更多按钮 */
.post-more a {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    background-color: #eee;
    border-radius: 5px;
    font-size: 0.85rem;
    text-decoration: none;
    transition: background-color 0.3s;
    color: #333;
}

.post-more a:hover {
    background-color: #ccc;
}

/* 封面图 */
.post-thumb img {
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
    display: block;
}
.post-list .post-thumb {
    position: relative;
    height: 100%;
    right: 0;
    /* width: 600px; */
    top: 0;
    /* z-index: -1; */
    pointer-events: none;
    filter: brightness(0.5);
    /* -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%); */
    /* mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%); */
    display: flex;
    align-items: center;
}
img {
    pointer-events: none;
    -webkit-user-drag: none;
    border-style: none;
    border: 0;
    max-width: 100%;
}
</style>
