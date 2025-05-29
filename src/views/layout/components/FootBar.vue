<template>
    <footer>
        <p>
            &copy; 2025 .
            <a href="https://beian.miit.gov.cn">渝ICP备2024043680号</a> .
            <span class="signature">Whiteaser</span>
        </p>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    text-align: center;
    /* line-height: 60px; */
    user-select: none;
    font-size: 0.8125rem;
    color: #b0b0b0;
    opacity: 0.7;
}
footer a {
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
footer a:visited {
    color: #b0b0b0;
}
footer a:active {
    color: #b0b0b0;
}
footer p {
    margin: 0;
}
footer .signature {
    font-weight: bold;
}
</style>
