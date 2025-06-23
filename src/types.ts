export interface Movie {
  id: number;
  name: string;
  description: string;
  posterUrl: string;
  genres: number[];
  session: Session[]
}

export interface Session {
  id:         number
  filmId:     number
  film: Movie
  startTime:  string
  endTime:    string
  totalPlaces: number
  seats:       Seat[]
  bookings:    Booking[]
}

interface Seat {
  id:       number
  row:      number
  number:   number
  sessionId: number
  isBooked: boolean
  booking:   Booking
}

export interface MoviesState {
  selectedMovie: Movie | null
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export type LoginInputs = {
  email: string
  password: string
}

export type RegisterInputs = {
  name: string
  email: string
  password: string
}

export interface AuthState {
  isAuth: boolean;
  data: null | string;
  loading: boolean;
  error: string | null;
}


export interface Booking {
  id: number
  userId: number
  sessionId: number
  seatId: number
  paymentStatus: string
  price: number
  createdAt: string
}

export interface BookingsState {
  bookings: null | Booking[];
  loading: boolean;
  error: string | null
}


export interface SessionState {
  sessions: null | Session[];
  loading: boolean;
  error: string | null
}


export interface SeatsState {
  seats: null | Seat[];
  loading: boolean;
  error: string | null
}

export interface SheduleInputs {
  date: string,
  filmName: string
}