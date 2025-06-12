import { defineConfig } from 'vite'

export default defineConfig({
    mode: 'development',
    server: {
        host: true,
        port: 5173,
        open: true,
        cors: true,
    },
    // 开发时默认开启 sourcemap
    css: {
        devSourcemap: true,
    },
})
