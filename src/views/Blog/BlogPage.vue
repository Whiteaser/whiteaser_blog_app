<template>
    <div class="content">
        <h1>White Blogs</h1>

        <!-- 标签按钮栏 -->
        <div class="blog-list">
            <router-link
                to="/blogs"
                @click="getPostsList()"
                class="tag-button"
                :class="{ active: $route.path === '/blogs' }"
                >
                全部
            </router-link>
            <router-link
                v-for="tag in blogStore.tagListInfo"
                :key="tag.id"
                :to="`/blogs/tag/${tag.NAME}`"
                @click="getPostsByTag(tag.id)"
                class="tag-button"
                :class="{ active: $route.params.slug === tag.NAME }"
            >
                {{ tag.NAME }}
            </router-link>
        </div>

        <!-- 文章列表 -->
        <main id="main" role="main" class="site-main">
            <BlogItem
                v-for="post in blogStore.postListInfo"
                :key="post.id"
                :post="post"
            />
        </main>
    </div>
</template>

<script setup lang="ts">
import BlogItem from '@/views/Blog/components/BlogItem.vue'
import { onMounted } from 'vue'
import { useBlogStore } from '@/stores/index'
import { blogGetInfoService } from '@/api/blog'
import { tagGetInfoService, tagGetPostsByTagService } from '@/api/tag'

const blogStore = useBlogStore()

const getPostsList = async () => {
    const res = await blogGetInfoService()
    blogStore.postListInfo = res.data.posts
}
const getTagList = async () => {
    const res = await tagGetInfoService()
    blogStore.tagListInfo = res.data
}

const getPostsByTag = async (id: number) => {
    const res = await tagGetPostsByTagService(id)
    console.log(res.data)
    blogStore.postListInfo = res.data.posts
}

onMounted(() => {
    getTagList()
    getPostsList()
})
</script>
<style scoped>
.content {
    font-family: 'NotoSerifSC-VariableFont_wght';
    user-select: none;
    width: 80%;
    max-width: 900px;
    min-width: 400px;
    margin: 0 auto;
    padding: 32px 16px;
    z-index: 0;
    h1 {
        font-family: 'ZCOOLXiaoWei-Regular';
        font-size: 40px;
        font-weight: normal;
        margin: 50px 0;
        text-align: center;
        color: white;
    }
}

.blog-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
}

.tag-button {
    margin-right: 10px;
    padding: 5px 14px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    background-color: rgba(89, 89, 89, 0.3);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border: 0.888889px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(14, 14, 14, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    color: rgb(255, 255, 255);
    transition: background-color 0.3s;
}

.tag-button:hover {
    background-color: rgba(89, 89, 89, 0.6);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
}

.tag-button.active {
    font-weight: 800;
    background-color: #ff0000;
}
</style>
