import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'
import type { SessionState } from "../../types";

export const fetchSession = createAsyncThunk('session/fetchSession', async (id: string | undefined, thunkApi) => {
   try {
     const { data } = await axios.get(`/sessions/${id}`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})

export const fetchSessionbyDateorFilmName = createAsyncThunk('session/fetchSessionbyDateorFilmName', async (query: {filmName: string, date: string}, thunkApi) => {
   try {
     const { data } = await axios.get(`/sessions/byNameOrDate?filmName=${query.filmName}&date=${query.date}`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})

const initialState: SessionState = {
    sessions: null,
    loading: false,
    error: null
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        
    }, 
     extraReducers(builder) {
        builder
                .addCase(fetchSession.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchSession.fulfilled, (state, action) => {
                    state.loading = false
                    state.sessions = action.payload
                })
                .addCase(fetchSession.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
                .addCase(fetchSessionbyDateorFilmName.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchSessionbyDateorFilmName.fulfilled, (state, action) => {
                    state.loading = false
                    state.sessions = action.payload
                })
                .addCase(fetchSessionbyDateorFilmName.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
    },

})


export const sessionReducer = sessionSlice.reducer;