import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 登录页
            path: '/login',
            component: () => import('@/views/login/LoginPage.vue'),
        },
        {
            // 进入首界面
            path: '/',
            component: () => import('@/views/layout/LayoutContainer.vue'),
            redirect: '/home',
            children: [
                {
                    // 首页
                    path: '/home',
                    component: () => import('@/views/layout/HomePage.vue'),
                },
                {
                    // 博客列表
                    path: '/blog',
                    component: () => import('@/views/layout/BlogPage.vue'),
                },
                {
                    // 博客详情页
                    path: 'blog/:slug',
                    component: () => import('@/components/BlogCard.vue'),
                },
                {
                    // 工具
                    path: '/tools',
                    component: () => import('@/views/layout/ToolsPage.vue'),
                },
                {
                    // About Me
                    path: '/me',
                    component: () => import('@/views/layout/AboutMe.vue'),
                },
            ],
        },
    ],
})

export default router
