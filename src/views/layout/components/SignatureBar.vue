<template>
    <div class="home-content">
        <h1 class="signature">Whiteaser<span>/</span></h1>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-content {
    /* z-index: 1; */
    user-select: none;
    /* white-space: nowrap; */
}
.signature {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 330px;
    font-family: 'Banquise-Regular', Arial, sans-serif;
    font-size: 48px;
    color: white;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    span {
      margin-left: 8px;
      font-size: 50px;
      color: #ffffff61;
    }
}

.signature::before {
    content: '<';
    font-size: 65px;
    margin-right: 8px;
    color: #ffffff61;
}
.signature::after {
    content: '>';
    font-size: 65px;
    margin-left: 5px;
    color: #ffffff61;
}
</style>
