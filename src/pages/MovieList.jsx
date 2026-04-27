import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

const movies = [
  {
    id: '1',
    title: 'Starfall: Journey Beyond',
    genre: 'Sci-Fi',
    duration: '2h 15m',
    rating: 'PG-13'
  },
  {
    id: '2',
    title: 'City Lights at Midnight',
    genre: 'Drama',
    duration: '1h 50m',
    rating: 'PG'
  },
  {
    id: '3',
    title: 'Rise of the River Wolves',
    genre: 'Action',
    duration: '2h 5m',
    rating: 'R'
  }
];

function MovieList() {
  const navigate = useNavigate();
  const { setSelectedMovie, selectedMovie } = useBooking();

  const handleChoose = (movie) => {
    setSelectedMovie(movie);
    navigate('/select-seats');
  };

  return (
    <div className="card page-card">
      <h2>Now Showing</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className={`movie-card ${selectedMovie?.id === movie.id ? 'selected' : ''}`}>
            <h3>{movie.title}</h3>
            <p>{movie.genre} • {movie.duration}</p>
            <p>Rating: {movie.rating}</p>
            <button onClick={() => handleChoose(movie)} className="button button-secondary">
              Select Seats
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
