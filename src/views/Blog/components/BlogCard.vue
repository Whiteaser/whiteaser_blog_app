<template>
    <div class="post-container">
        <header>
            <h1>{{ post.title }}</h1>
            <p>
                <span>Whiteaser · </span>
                <span>{{ formatTime(post.created_at) }} · </span>
                <span>编辑于 {{ formatTime(post.updated_at) }} · </span>
                <span>{{ calculalteTime(post.updated_at) }}</span>
            </p>
        </header>

        <article class="post-cotent">
            <MdPreview
                :modelValue="post.content"
                previewTheme="transparent"
                codeTheme="github"
            />
        </article>
    </div>
</template>

<script setup lang="ts">
import '@/assets/css/markdown.css'
import 'md-editor-v3/lib/preview.css'
import { MdPreview } from 'md-editor-v3'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { blogGetDetailService } from '@/api/blog'
import { formatTime, calculalteTime } from '@/utils/time'
import type { Post } from '@/types/type'
const route = useRoute()
const slug = route.params.slug as string

const post = ref<Post>({} as Post)

const getBlogdetail = async (slug: string) => {
    const res = await blogGetDetailService(slug)
    console.log(res.data)
    post.value = await res.data
}

onMounted(() => {
    getBlogdetail(slug)
})
</script>

<style scoped>
.post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

header {
    user-select: none;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-family: 'ZCOOLXiaoWei-Regular';
        font-size: 42px;
        margin-top: 7rem;
        color: white;
    }
    p {
        font-family: 'Noto Serif SC';
        font-size: 15px;
        color: white;
        padding: 18px 0 0;
    }
}

.post-cotent {
    max-width: 1100px;
    padding: 1.5rem 2rem;
    margin: 0 5%;
    margin-top: 32px;
    border-radius: 30px;
    box-shadow: 0 5px 15px #00000050;
    border: 1px solid #96969650;
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
}
</style>
