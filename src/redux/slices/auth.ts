import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'
import type {AuthState, LoginInputs, RegisterInputs } from "../../types";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (values: LoginInputs, thunkApi) => {
   try {
     const { data } = await axios.post('/auth/login', values);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (values: RegisterInputs, thunkApi) => {
   try {
     const { data } = await axios.post('/auth/register', values);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})


const initialState: AuthState = {
    isAuth: false,
    data: null,
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuth = false;
        }
    }, 
     extraReducers(builder) {
        builder
                .addCase(fetchAuth.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchAuth.fulfilled, (state, action) => {
                    state.loading = false
                    state.isAuth = true
                    state.data = action.payload
                })
                .addCase(fetchAuth.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
                .addCase(fetchRegister.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchRegister.fulfilled, (state, action) => {
                    state.loading = false
                    state.isAuth = true
                    state.data = action.payload
                })
                .addCase(fetchRegister.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
    },

})


export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer;