import axios from 'axios'

const baseURL = 'http://localhost:3000'

const instance = axios.create({
    baseURL,
    timeout: 100000,
})

// TODO 1. 设置请求头
instance.interceptors.request.use(
    (config) => {
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
        // TODO 5. 处理401错误
        return Promise.reject(err)
    },
)

export default instance

export { baseURL }
