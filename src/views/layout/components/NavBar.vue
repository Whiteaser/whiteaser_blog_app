<template>
    <header :class="{ visible: true }">
        <nav>
            <ul class="nav_bar">
                <li @click="toPage('/home')">Home</li>
                <li @click="toPage('/blog')">Blog</li>
                <li @click="toPage('/tools')">Tools</li>
                <li @click="toPage('/me')">Me</li>
            </ul>
        </nav>
    </header>
    <footer></footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const toPage = (path: string): void => {
    router.push(path)
}
</script>
<style scoped>
header {
    position: fixed;
    top: 0;
    width: 100%;
    /* pointer-events: none; */
    z-index: 1;
    user-select: none;
}

.nav_bar {
    display: flex;
    justify-content: center;
    padding: 15px 0;
}

.nav_bar li {
    /* width: 2em; */
    list-style: none;
    margin: 0 20px;
    cursor: pointer;
    font-size: 1.5em;
    color: white;
    transition:
        transform 0.4s ease-in-out,
        color 0.4s;
    display: inline-block; /* 避免内联布局意外折行 */
    text-align: center;
}

.nav_bar li:hover {
    transform: scale(1.33);
    color: red;
}
</style>
