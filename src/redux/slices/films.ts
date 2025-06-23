import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'
import type {MoviesState } from "../../types";

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (_, thunkApi) => {
   try {
     const { data } = await axios.get('/films');
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})

export const fetchByFilmId = createAsyncThunk('films/fetchFilm', async (id: string | undefined, thunkApi) => {
   try {
     const { data } = await axios.get(`/films/${id}`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})

export const fetchF = createAsyncThunk('films/fetchFilm', async (id: string | undefined, thunkApi) => {
   try {
     const { data } = await axios.get(`/films/${id}`);
     return data

   } catch (error: any) {
        return thunkApi.rejectWithValue(error.message)
   }
})




const initialState: MoviesState = {
    selectedMovie: null,
    movies: [],
    loading: false,
    error: null
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        clearSelectedMovie: (state) => {
            state.selectedMovie = null
        }
    }, 
     extraReducers(builder) {
        builder
                .addCase(fetchFilms.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchFilms.fulfilled, (state, action) => {
                    state.loading = false
                    state.movies = action.payload
                })
                .addCase(fetchFilms.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
                .addCase(fetchByFilmId.pending, (state) => {
                    state.loading = true
                })
                .addCase(fetchByFilmId.fulfilled, (state, action) => {
                    state.loading = false
                    state.selectedMovie = action.payload
                })
                .addCase(fetchByFilmId.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload as string
                })
    },

})


export const filmsReducer = filmsSlice.reducer;
export const { clearSelectedMovie } = filmsSlice.actions