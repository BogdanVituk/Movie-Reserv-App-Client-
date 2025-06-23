import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '../../redux/slices/films'
import type { AppDispatch, RootState } from '../../redux/store'
import MovieList from '../../components/MovieList'

function Home() {

  const dispatch = useDispatch<AppDispatch>()
  const { movies, loading: isMovieLoading } = useSelector((state: RootState) => state.films);


  useEffect(() => {
    dispatch(fetchFilms())
  }, [])

  return (
    <div className='__container'>
      {
      isMovieLoading ? 
      'Loading' : 
       <MovieList movies={movies}/>
      }
    </div>
  )
}

export default Home
