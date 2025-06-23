import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearSelectedMovie, fetchByFilmId } from "../../redux/slices/films";
import { Link, useParams } from "react-router";
import { fetchSession } from "../../redux/slices/sesssion";
import SessionsList from "../../components/SessionsList";


const Movie = () => {

    const dispatch = useAppDispatch()
    const { id } = useParams<{id: string}>()

    const { selectedMovie, loading, error } = useAppSelector(state => state.films)

    const { sessions, loading: sessionLoading, error: sessionError } = useAppSelector(state => state.session)    

    useEffect(() => {
        
        dispatch(fetchByFilmId(id))
        dispatch(fetchSession(id))
        return () => {
            dispatch(clearSelectedMovie())
        }
    },[])

    return (
        <div className="__container">
            <div className="mb-10">
            {
                loading ?
                'loading'
                :
                <div className="flex">
                    <img src={selectedMovie?.posterUrl} alt="" />
                    <div className="flex flex-col ml-10">
                        <div className="font-bold text-2xl">{selectedMovie?.name}</div>
                        <div className="font-semibold">{selectedMovie?.description}</div>
                    </div>
                </div>
            }
            </div>
            <h2 className="font-bold text-2xl">Session with film</h2>
            {
                sessionLoading ?
                'loading'
                : 
                <SessionsList sessions={sessions}/>
            
            }
        </div>
    );
};

export default Movie;