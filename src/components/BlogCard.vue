<template>
    <div class="post-container">
        <div v-if="loading">文章加载中...</div>
        <div v-else-if="error">{{ error }}</div>
        <MdPreview
            v-else
            :id="id"
            :modelValue="markdown"
            previewTheme="default"
            codeTheme="github"
            class="md-preview"
        />
    </div>
</template>

<script setup lang="ts">
import '@/assets/markdown.css'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const id = 'preview-only'
const route = useRoute()
const slug = route.params.slug as string

const markdown = ref('')
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    try {
        const res = await fetch(`/posts/${slug}.md`)
        if (!res.ok) {
            throw new Error(`文件不存在: /posts/${slug}.md`)
        }
        markdown.value = await res.text()
    } catch (err: unknown) {
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

:deep(.md-editor-preview-wrapper),
:deep(.md-editor-preview) {
    background: transparent !important;
}
</style>
