import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

function Confirmation() {
  const { selectedMovie, selectedSeats, paymentInfo, user, resetBooking } = useBooking();
  const navigate = useNavigate();

  const handleDone = () => {
    resetBooking();
    navigate('/movies');
  };

  return (
    <div className="card page-card">
      <h2>Booking Confirmed</h2>
      <p className="subtitle">Thank you, {user?.email}.</p>
      <div className="summary-block">
        <div>
          <strong>Movie</strong>
          <p>{selectedMovie?.title}</p>
        </div>
        <div>
          <strong>Seats</strong>
          <p>{selectedSeats.join(', ')}</p>
        </div>
        <div>
          <strong>Payment</strong>
          <p>Card ending {paymentInfo.cardNumber.slice(-4)}</p>
        </div>
      </div>
      <button onClick={handleDone} className="button button-primary">Book Another Movie</button>
    </div>
  );
}

export default Confirmation;
