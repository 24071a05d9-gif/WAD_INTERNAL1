import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

const rows = ['A', 'B', 'C', 'D', 'E'];
const seatsPerRow = 8;

function SeatSelection() {
  const { selectedMovie, selectedSeats, setSelectedSeats } = useBooking();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const seats = useMemo(() => {
    return rows.flatMap((row) => {
      return Array.from({ length: seatsPerRow }, (_, index) => `${row}${index + 1}`);
    });
  }, []);

  const toggleSeat = (seat) => {
    setError('');
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
      return;
    }
    if (selectedSeats.length >= 6) {
      setError('You can select up to 6 seats.');
      return;
    }
    setSelectedSeats([...selectedSeats, seat]);
  };

  const handleContinue = () => {
    if (!selectedMovie) {
      setError('Please select a movie first.');
      return;
    }
    if (selectedSeats.length === 0) {
      setError('Select at least one seat to continue.');
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="card page-card">
      <h2>Seat selection</h2>
      <p className="subtitle">Movie: {selectedMovie?.title || 'No movie selected'}</p>
      <div className="seat-map">
        {seats.map((seat) => (
          <button
            key={seat}
            type="button"
            className={`seat ${selectedSeats.includes(seat) ? 'seat-selected' : ''}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
      {error && <div className="alert">{error}</div>}
      <div className="actions-row">
        <div>{selectedSeats.length} seats selected</div>
        <button onClick={handleContinue} className="button button-primary">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default SeatSelection;
