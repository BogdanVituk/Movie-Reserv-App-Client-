import type { FC } from "react";
import type { Booking } from "../types";
import BookingItem from "./BookingItem";

interface BookingsListProps {
    bookings: Booking[] | null
}   

const BookingsList: FC<BookingsListProps> = ({bookings}) => {
    return (
        <div className="flex">
            {
                bookings?.map(item => {
                    return <BookingItem booking={item}/>
                })
            }
        </div>
    );
};

export default BookingsList;