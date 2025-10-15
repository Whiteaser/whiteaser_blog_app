import axios from 'axios'
import { useBlogStore } from '@/stores/index'

const blogStore = useBlogStore()

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 100000,
})

// TODO 1. 设置请求头
instance.interceptors.request.use(
    (config) => {
        if (blogStore.token) {
            config.headers!.Authorization = `Bearer ${blogStore.token}`
        }

        // 只在 data 不是 FormData 时设置 Content-Type
        if (config.data && config.data instanceof FormData) {
            delete config.headers['Content-Type']
        } else {
            config.headers['Content-Type'] = 'application/json;charset=utf-8'
        }
        return config
    },
    (err) => Promise.reject(err),
)

instance.interceptors.response.use(
    (res) => {
        // TODO 3. 处理业务失败
        // TODO 4. 摘取核心响应数据
        return res
    },
    (err) => {
        return Promise.reject(err)
    },
)

export default instance
