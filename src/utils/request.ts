import axios from 'axios'

// const baseURL = 'http://'

const instance = axios.create({})

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
