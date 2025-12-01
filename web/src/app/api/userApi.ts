import { api } from "./axiosConfig"
import type { LoginUser, RegisterUser } from "./userModels"

export const login = () => {

}

export const userApi = {
    register: (user: RegisterUser) => api.post('/register', user),
    login: (user: LoginUser) => api.post('/login', user)
}