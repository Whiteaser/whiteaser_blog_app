<template>
    <div @mousemove="handleMouseMove">
        <header :class="{ visible: showNav }">
            <nav>
                <ul class="nav_bar">
                    <li @click="toPage('/home')">Home</li>
                    <li @click="toPage('/blog')">Blog</li>
                    <li @click="toPage('/tools')">Tools</li>
                    <li @click="toPage('/me')">Me</li>
                </ul>
            </nav>
        </header>
        <RouterView />
        <footer></footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const toPage = (path: string): void => {
    router.push(path)
}

const showNav = ref(false)

const handleMouseMove = (e: MouseEvent) => {
    showNav.value = e.clientY <= 80
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    width: 100%;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
    z-index: 1000;
}

header.visible {
    opacity: 1;
    pointer-events: auto;
}

.nav_bar {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px 0;
    margin: 0;
}

.nav_bar li {
    list-style: none;
    margin: 0 20px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    transition: all 0.4s ease-in-out;
}

.nav_bar li:hover {
    font-size: 24px;
    color: red;
}
</style>
