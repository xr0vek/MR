import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/redux/store";
import { userApi } from "../app/api/userApi";

export interface InitialState {
    name: string | null,
    email: string | null,
    error: string | null,
}

const initialState: InitialState = {
    name: null,
    email: null,
    error: null
}

export const loginUser = createAsyncThunk("user/register", (user: {name: string, email: string, password: string}) => {
    userApi.register(user)
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (_, action) => {
            console.log(action.payload)
        })
    }
})

export const userReducer = userSlice.reducer
export const {} = userSlice.actions
export const selectUser = (state: RootState) => state.user  