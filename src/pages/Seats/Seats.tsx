import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchSeats } from "../../redux/slices/seats";
import { fetchBookingSeat } from "../../redux/slices/bookings";

const Seats = () => {

    const {id} = useParams<{id: string}>();

    const dispatch = useAppDispatch();
    const {seats, loading} = useAppSelector(state => state.seats)
    const { isAuth } = useAppSelector(state => state.auth)

    useEffect(() => {
        dispatch(fetchSeats(id))
    }, [])


    const clickHandler = (seatId: number, sessionId: number) => {
        const param = {
            userId: 5,
            seatId,
            sessionId
        }
        dispatch(fetchBookingSeat(param))
    }
    
    if(isAuth) {
        return <div>Спочатку авторизуйтесь</div>
    }

    return (
        <div className="__container">
            <h2 className="font-semibold text-2xl">Seats free {seats?.length}</h2>
            {
                loading ? 
                'loading'
                : <div className="flex flex-wrap">
                    {   
                        seats?.map(item => {
                            return  <div onClick={() => clickHandler(item.id, item.sessionId)} className="m-5 bg-red-300 p-2 rounded-2xl font-semibold">
                                    <div>number: {item.number}</div> 
                                    <div>row: {item.row}</div>
                                   <div className='cursor-pointer bg-green-400 text-center rounded-2xl mt-2 hover:bg-green-500 transition p-2'>booked</div>    
                                </div> 
                            
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Seats;