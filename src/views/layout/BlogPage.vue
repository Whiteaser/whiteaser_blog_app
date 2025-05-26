<template>
  <MdPreview :id="id" :modelValue="myMarkdown" />
  <!-- <MdCatalog :editorId="id" :scrollElement="scrollElement" /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import myMarkdown from '@/assets/TypeScript.md?raw';

// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';

const id = 'preview-only';
const text = ref('# Hello Editor');
const scrollElement = document.documentElement;
</script>
