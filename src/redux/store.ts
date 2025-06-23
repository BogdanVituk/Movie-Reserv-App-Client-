import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./slices/films";
import { authReducer } from "./slices/auth";
import { bookingsReducer } from "./slices/bookings";
import { sessionReducer } from "./slices/sesssion";
import { seatsReducer } from "./slices/seats";


export const store = configureStore({
    reducer: {
        films: filmsReducer,
        auth: authReducer,
        bookings: bookingsReducer,
        session: sessionReducer,
        seats: seatsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch