import { type FC } from 'react';
import type { Movie } from '../types';
import { Link } from 'react-router';

interface MovieListProps {
    movies: Movie[]
}

const MovieList: FC<MovieListProps> = ({movies}) => {
    return (
        <div>
            {
                movies.map(item => {
                    return <Link to={`/movie/${item.id}`}>
                        <div key={item.id} className='bg-red-500 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition p-4'>
                            <img src={item.posterUrl} alt="poster" className='' />
                            <div>
                                   <h3 className='text-base font-semibold truncat'>{item.name}</h3>
                                   <p className="text-sm text-gray-white">{item.description}</p>
                            </div>
                        </div> 
                    </Link>
                })
  
            }
        </div>
    );
};

export default MovieList;