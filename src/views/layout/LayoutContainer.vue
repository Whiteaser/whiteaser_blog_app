<template>
    <noscript>
        <div
            style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: red;
                color: white;
                text-align: center;
                padding: 10px;
                font-size: 16px;
                z-index: 9999999999;
            "
        >
            ⚠️ 您的浏览器已禁用 JavaScript！请启用 JavaScript
            以获得完整功能支持。
        </div>
    </noscript>
    <!-- 布局 -->
    <div class="layout">
        <!-- 遮罩 -->
        <div class="cover is-homepage"></div>
        <!-- 背景 -->
        <video
            class="cover-bg active"
            src="@/assets/BGV2.mp4"
            autoplay
            muted
            loop
            playsinline
        ></video>
        <NavBar />

        <router-view />

        <FootBar />
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/views/layout/components/NavBar.vue'
import FootBar from '@/views/layout/components/FootBar.vue'
</script>

<style scoped>
.cover {
    z-index: 0;
    position: fixed;
    pointer-events: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
        radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
}
.cover-bg {
    z-index: -1;
    opacity: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.rounded {
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 50%;
}

.pointed {
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 50%;
}
</style>
