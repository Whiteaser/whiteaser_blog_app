<template>
    <header>
        <div class="nav_before"></div>
        <nav>
            <ul class="nav_bar">
                <li @click="toPage('/home')">Home</li>
                <li @click="toPage('/blogs')">Blog</li>
                <li @click="toPage('/tools')">Tools</li>
                <li @click="toPage('/me')">Me</li>
            </ul>
        </nav>
        <div class="nav_after">
            <el-icon
                :class="{ 'is-loading': isHover }"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
                :size="20"
                color="white"
                @click="toPage('/login')"
            >
                <Setting />
            </el-icon>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Setting } from '@element-plus/icons-vue'

const isHover = ref(false)
const router = useRouter()
const toPage = (path: string): void => {
    router.push(path)
}
</script>
<style scoped>
header {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: -50px;
    width: 100%;
    height: 60px;
    z-index: 1;
    opacity: 0;
    transition: all 0.5s ease;
}
header:hover {
    top: 0;
    opacity: 1;
}
.nav_bar {
    display: flex;
    justify-content: center;
    padding: 20px 0;
}

.nav_bar li {
    font-family: 'DMSerifText-Regular', Arial, sans-serif;
    font-size: 1.5em;
    list-style: none;
    margin: 0 20px;
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

.nav_after {
    position: absolute;
    right: 16px;
}
</style>
