import { api } from "./axiosConfig"
import type { LoginUser, RegisterUser } from "./userModels"

export const userApi = {
    register: (user: RegisterUser) => api.post('/user/register', user).then(res  => res.data) ,
    login: (user: LoginUser) => api.post('/user/login', user).then(res => res.data),
    fetch: () => api.get('/user/profile').then(res => res.data),
    logout: () => api.post('/user/logout'),
    update: () => api.post('user/update')
}