import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import MovieList from './pages/MovieList.jsx';
import SeatSelection from './pages/SeatSelection.jsx';
import Payment from './pages/Payment.jsx';
import Confirmation from './pages/Confirmation.jsx';
import NotFound from './pages/NotFound.jsx';
import { useBooking } from './context/BookingContext.jsx';

function App() {
  const { user } = useBooking();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Movie Ticket Booking</div>
      </header>
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movies" element={user ? <MovieList /> : <Navigate to="/" replace />} />
          <Route path="/select-seats" element={user ? <SeatSelection /> : <Navigate to="/" replace />} />
          <Route path="/payment" element={user ? <Payment /> : <Navigate to="/" replace />} />
          <Route path="/confirmation" element={user ? <Confirmation /> : <Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
