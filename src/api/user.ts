import request from '@/utils/request'
import type { User } from '@/types/type'

// 用户 注册
export const userRegisterService = ({ username, email, password }: User) =>
    request.post('api/users/register', { username, email, password })

// 用户 登录
export const userLoginService = ({ email, password }: User) =>
    request.post('api/users/login', { email, password })
