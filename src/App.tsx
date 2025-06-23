import './App.css'
import { Route, Routes } from 'react-router'
import NotFoundPage from './pages/404.tsx'
import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import Header from './pages/Header/Header.tsx'
import Schedule from './pages/Schedule/schedule.tsx'
import MyBookings from './pages/MyBookings/MyBookings.tsx'
import Movie from './pages/Movie/Movie.tsx'
import Seats from './pages/Seats/Seats.tsx'
import Register from './pages/Register/Register.tsx'

function App() {

  return (
    <>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/not-found' element={<NotFoundPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/movie/:id' element={<Movie/>} />
        <Route path='/seats/:id' element={<Seats/>} />
      </Routes>
    </>
  )
}

export default App
