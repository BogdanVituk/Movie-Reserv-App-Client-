import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchBookings } from "../../redux/slices/bookings";
import BookingsList from "../../components/BookingsList";

const MyBookings = () => {


    const dispatch = useAppDispatch();
    const { bookings, loading } = useAppSelector(state => state.bookings);
    useEffect(() => {
        dispatch(fetchBookings(5))
    }, [])
    

    return (
        <div className="__container p-6">
            <h2 className="text-xl font-normal">Мої бронювання</h2>
            {
                loading ? 'loading'
                :
                <BookingsList bookings={bookings}/>
            }
        </div>
    );
};

export default MyBookings;