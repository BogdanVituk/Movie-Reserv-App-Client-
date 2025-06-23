import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'
import type { SeatsState } from "../../types";

export const fetchSeats = createAsyncThunk('seats/fetchSeats', async (id: string | undefined, thunkApi) => {
   try {
     const { data } = await axios.get(`/seats/${id}`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})


const initialState: SeatsState = {
    seats: null,
    loading: false,
    error: null
}

export const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        
    }, 
     extraReducers(builder) {
        builder
                .addCase(fetchSeats.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchSeats.fulfilled, (state, action) => {
                    state.loading = false
                    state.seats = action.payload
                })
                .addCase(fetchSeats.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
    },

})


export const seatsReducer = seatsSlice.reducer;