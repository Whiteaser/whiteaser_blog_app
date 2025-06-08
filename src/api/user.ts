import request from '@/utils/request'

// 用户 注册
export const userRegisterService = (email: string, password: string) =>
    request.post('/users/register', { email, password })
// 用户 登录
export const userLoginService = (email: string, password: string) =>
    request.post('/users/login', { email, password })
