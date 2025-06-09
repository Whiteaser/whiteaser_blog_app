<template>
    <div class="post-container">
        <div v-if="loading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus eum dolores sed eius? Reiciendis facere omnis eaque
            debitis dolorum ut dolor dolorem hic fugiat illum? Vel consequatur
            officia officiis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quae voluptatibus eum dolores sed eius? Reiciendis facere
            omnis eaque debitis dolorum ut dolor dolorem hic fugiat illum? Vel
            consequatur officia officiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae voluptatibus eum dolores sed eius? Reiciendis
            facere omnis eaque debitis dolorum ut dolor dolorem hic fugiat
            illum? Vel consequatur officia officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quae voluptatibus eum dolores sed
            eius? Reiciendis facere omnis eaque debitis dolorum ut dolor dolorem
            hic fugiat illum? Vel consequatur officia officiis. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quae voluptatibus eum
            dolores sed eius? Reiciendis facere omnis eaque debitis dolorum ut
            dolor dolorem hic fugiat illum? Vel consequatur officia officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus eum dolores sed eius? Reiciendis facere omnis eaque
            debitis dolorum ut dolor dolorem hic fugiat illum? Vel consequatur
            officia officiis.
        </div>
        <div v-else-if="error">{{ error }}</div>
        <MdPreview
            v-else
            id="preview-only"
            :modelValue="markdown"
            previewTheme="transparent"
            codeTheme="github"
        />
    </div>
</template>

<script setup lang="ts">
import '@/assets/css/markdown.css'
import 'md-editor-v3/lib/preview.css'
import { MdPreview } from 'md-editor-v3'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { blogGetDetailService } from '@/api/blog'

const route = useRoute()
const slug = route.params.slug as string

const markdown = ref('')
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    try {
        const res = await blogGetDetailService(slug)
        console.log(res.data);
        markdown.value = await res.data.content
    } catch (err) {
        console.error('加载失败:', err)
        if (err && typeof err === 'object' && 'message' in err) {
            error.value =
                (err as { message: string }).message || '文章加载失败。'
        } else {
            error.value = '文章加载失败。'
        }
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
.post-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>
