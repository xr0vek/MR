import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import { userReducer } from "../../entities/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
