import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/redux/store";
import { userApi } from "../app/api/userApi";
import type { LoginUser, RegisterUser } from "../app/api/userModels";

export interface InitialState {
    user:{
        name: string,
        email: string,
        id: string
    } | null
    error: string | null,
}

const initialState: InitialState = {
    user: null,
    error: null
}

export const fetchUser = createAsyncThunk('user/fetch', () => {
    return userApi.fetch()
})

export const loginUser = createAsyncThunk("user/login", ({data: user, onSuccess}: {data: LoginUser, onSuccess: () => void}) => {
    return userApi.login(user).then(res => {
        onSuccess()
        return res
    })
})

export const registerUser = createAsyncThunk("user/register", (user: RegisterUser) => {
    userApi.register(user)
})

export const logoutUser = createAsyncThunk('user/logout', ({onSuccess}: {onSuccess: () => void}) => {
    return userApi.logout().then(res => {
        onSuccess()
        return res
    })
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user ={
                name: action.payload.name,
                id: action.payload.id,
                email: action.payload.email
            }
        }),
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action.payload)
        }),
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            return initialState
        })
    }
})

export const userReducer = userSlice.reducer
export const {} = userSlice.actions
export const selectUser = (state: RootState) => state.user  