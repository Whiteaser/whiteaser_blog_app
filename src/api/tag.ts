import request from '@/utils/request'

// 获取 标签 列表
export const tagGetInfoService = () => request.get('/api/tags')

// 获取 标签相关 博客
export const tagGetPostsByTagService = (id: number) => request.get(`/api/tags/${id}/posts`)

// 新建 标签
export const tagCreateService = (name:string) => request.post('/api/tags', { name })

// 删除 标签
export const tagDeleteService = (id: string) => request.delete(`/api/tags/${id}`)
