<template>
    <!-- <MdPreview :id="id" :modelValue="myMarkdown" :theme="state.theme" /> -->
    <MdPreview :id="id" :modelValue="myMarkdown" />
    <!-- <MdCatalog :editorId="id" :scrollElement="scrollElement" /> -->
</template>

<script setup lang="ts">
// import { reactive } from 'vue'
import { MdPreview } from 'md-editor-v3'
// import type { Themes } from 'md-editor-v3/lib/types'
import myMarkdown from '@/assets/TypeScript.md?raw'

// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css'

const id = 'preview-only'

</script>
