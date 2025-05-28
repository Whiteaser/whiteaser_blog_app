<template>
  <!-- <div class="background"></div> -->
    <div @mousemove="handleMouseMove" class="layout-container">
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

.background {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(5px); /* 毛玻璃背景感 */
}
.layout-container {
    position: relative;
    min-height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}
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
