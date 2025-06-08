import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
                component: () =>
                    import('@/views/layout/components/SignatureBar.vue'),
            },
            {
                // 所有博客列表
                path: '/blogs',
                component: () => import('@/views/Blog/BlogPage.vue'),
            },
            {
                // 标签博客列表
                path: 'blogs/tag/:slug',
                name: 'blogsByTag',
                component: () => import('@/views/Blog/BlogPage.vue'),
            },
            {
                // 博客详情
                path: 'blogs/detail/:slug',
                component: () => import('@/views/Blog/components/BlogCard.vue'),
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
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
// 导航守卫+登录访问拦截
router.beforeEach(() => {
    // 如果没有token, 且访问的是非登录页，拦截到登录，其他情况正常放行
    // 在路由跳转前开始显示loading效果
    // ElLoading.service({
    //   lock: true,
    //   text: '加载中...'
    // })
    //   if (
    //     to.path !== '/home' &&
    //     to.path !== '/user' &&
    //     !ServerSDK.IsLogin() &&
    //     to.path !== '/login'
    //   ) {
    //     return '/login'
    //   }
})

// 使用 afterEach 钩子来关闭 loading 效果
router.afterEach(() => {
    // ElLoading.service().close()
})
export default router
