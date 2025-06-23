import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'
import type {BookingsState } from "../../types";

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async (id: number, thunkApi) => {
   try {
     const { data } = await axios.get(`/bookings/user/${id}`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})

export const fetchBookingSeat = createAsyncThunk('bookings/fetchBookingSeat', async (param: {userId: number, seatId: number, sessionId: number}, thunkApi) => {
   try {
     const { data } = await axios.post(`/bookings`, param);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})


export const cancleBookings = createAsyncThunk('bookings/cancelBookings', async (id: number, thunkApi) => {
   try {
     const { data } = await axios.delete(`/bookings/user/${id}/cancel`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})


const initialState: BookingsState = {
    bookings: null,
    loading: false,
    error: null
}

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        
    }, 
     extraReducers(builder) {
        builder
                .addCase(fetchBookings.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchBookings.fulfilled, (state, action) => {
                    state.loading = false
                    state.bookings = action.payload
                })
                .addCase(fetchBookings.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
                .addCase(fetchBookingSeat.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchBookingSeat.fulfilled, (state, action) => {
                    state.loading = false
                })
                .addCase(fetchBookingSeat.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
    },

})


export const bookingsReducer = bookingsSlice.reducer;