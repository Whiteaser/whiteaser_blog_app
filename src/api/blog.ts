import request from '@/utils/request'

// 获取 博客列表
export const blogGetInfoService = () => request.get('/api/posts/')

// 获取 博客详情
export const blogGetDetailService = (id: string) =>
    request.get(`/api/posts/${id}`)

// 发布 博客
export const blogCreateService = (
    title: string,
    content: string,
    summary: string,
    cover_url: string,
    tags: string[],
) => request.post('/api/posts/', { title, content, summary, cover_url, tags })
