import { type FC } from 'react';
import type { Movie } from '../types';
import { Link } from 'react-router';

interface MovieListProps {
    movies: Movie[]
}

const MovieList: FC<MovieListProps> = ({movies}) => {
    return (
        <div className='flex flex-wrap p-4'>
            {
                movies.map(item => {
                    return <Link to={`/movie/${item.id}`}>
                        <div key={item.id} className='p-3'>
                            <div className='w-full h-[100px] overflow-hidden rounded-lg'><img src={item.posterUrl} alt="poster" className='w-full h-full object-cover' /></div>
                            <div className='text-[18px] font-semibold truncat'>{item.name}</div>
                        </div> 
                    </Link>
                })
  
            }
        </div>
    );
};

export default MovieList;