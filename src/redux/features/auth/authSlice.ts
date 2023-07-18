import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {User} from "./types";

export interface AuthState {
    user: User | null;
    access_token: string | null
}

const initialState: AuthState = {
    user: null,
    access_token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { user, access_token } = action.payload;
            state.user = user;
            state.access_token = access_token;
        },
        logOut: (state, action) => {
            state.user = null;
            state.access_token = null;
        }
    }
})

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;