<template>
    <main class="brief">
        <h1>Blog Articles</h1>
        <article v-for="article in articles" :key="article.title">
            <h2>{{ article.title }}</h2>
            <p>{{ article.content }}</p>
        </article>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Article {
    title: string
    content: string
    img?: string
}

const articles = ref<Article[]>([
    {
        title: 'Article 1',
        content: 'This is the content of article 1.',
    },
    {
        title: 'Article 2',
        content: 'This is the content of article 2.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
    {
        title: 'Article 3',
        content: 'This is the content of article 3.',
    },
])
// const currentArticle = ref(articles.value[0]);
</script>
<style scoped>
.brief {
  width: 80vw;
  height: 80vh;
  border: solid 1px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  margin: 0 auto;
}
</style>
