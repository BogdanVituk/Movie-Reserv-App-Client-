import { useState, type FC } from "react";
import type { Booking } from "../types";
import { useAppDispatch } from "../hooks";
import { cancleBookings } from "../redux/slices/bookings";

interface BookingItemProps {
    booking: Booking
}

const BookingItem: FC<BookingItemProps> = ({booking}) => {

    const dispatch = useAppDispatch()

    const clickHandler = () => {
        dispatch(cancleBookings(5))
    }
    return (
        <div className="m-5 bg-amber-300 rounded-2xl p-2">
            <div>Seat: {booking.seatId}</div>
            <div>Payment-Status: {booking.paymentStatus}</div>
            <div>Price: {booking.price}$</div>
            <button className="cursor-pointer bg-red-400  text-white p-2 rounded-2xl mt-2 hover:bg-red-500 transition" onClick={clickHandler}>Скасувати</button>
        </div>
    );
};

export default BookingItem;