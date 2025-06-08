<template>
    <div class="content">
        <h1>Blogs</h1>

        <!-- 标签按钮栏 -->
        <div class="blog-list">
            <!-- <router-link
                to="/blogs"
                class="tag-button"
                :class="{ active: $route.path === '/blogs' }"
            >
                全部
            </router-link>
            <router-link
                v-for="tag in tags"
                :key="tag.id"
                :to="`/blogs/tag/${tag.name}`"
                class="tag-button"
                :class="{ active: $route.params.slug === tag.name }"
            >
                {{ '# ' + tag.nick_name }}
            </router-link> -->
        </div>

        <!-- 文章列表 -->
        <main id="main" role="main" class="site-main">
            <BlogItem
                v-for="post in postListInfo"
                :key="post.id"
                :post="post"
            />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import BlogItem from '@/views/Blog/components/BlogItem.vue'
import { blogGetInfoService } from '@/api/blog'
import { tagGetInfoService } from '@/api/tag'
import type { Post, Tag } from '@/types/test'
// import { useRoute } from 'vue-router'
// import { watchEffect } from 'vue'

const tags = ref<Tag[]>([])

// const route = useRoute()
const postListInfo = ref<Post[]>([])
const getArticleList = async () => {
    const res = await blogGetInfoService()
    postListInfo.value = res.data.posts
}
const getTagList = async () => {
    const res = await tagGetInfoService()
    console.log(res.data);
    tags.value = res.data
}

onMounted(() => {
    getTagList()
    getArticleList()
})
</script>
<style scoped>
.content {
    width: 80%;
    max-width: 900px;
    min-width: 400px;
    margin: 0 auto;
    padding: 2rem 1rem;
    z-index: 0;
    h1 {
        text-align: center;
        margin: 20px 0;
    }
}

.blog-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.tag-button {
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

.tag-button:hover {
    background-color: #ccc;
}

.tag-button.active {
    background-color: #333;
    color: #ff0000;
}
</style>
