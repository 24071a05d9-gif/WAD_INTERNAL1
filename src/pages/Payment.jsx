import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

function Payment() {
  const { selectedMovie, selectedSeats, paymentInfo, setPaymentInfo } = useBooking();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    setPaymentInfo({ ...paymentInfo, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!paymentInfo.cardName || !paymentInfo.cardNumber || !paymentInfo.expiry || !paymentInfo.cvv) {
      setError('All payment fields are required.');
      return;
    }
    if (selectedSeats.length === 0 || !selectedMovie) {
      setError('No booking data available.');
      return;
    }
    setError('');
    navigate('/confirmation');
  };

  return (
    <div className="card page-card">
      <h2>Payment details</h2>
      <p className="subtitle">Booking for {selectedMovie?.title}</p>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          Cardholder name
          <input value={paymentInfo.cardName} onChange={handleChange('cardName')} placeholder="Jane Doe" />
        </label>
        <label>
          Card number
          <input value={paymentInfo.cardNumber} onChange={handleChange('cardNumber')} placeholder="1234 5678 9012 3456" maxLength="19" />
        </label>
        <label>
          Expiry date
          <input value={paymentInfo.expiry} onChange={handleChange('expiry')} placeholder="MM/YY" maxLength="5" />
        </label>
        <label>
          CVV
          <input value={paymentInfo.cvv} onChange={handleChange('cvv')} placeholder="123" maxLength="4" />
        </label>
        {error && <div className="alert">{error}</div>}
        <button type="submit" className="button button-primary">Confirm Payment</button>
      </form>
    </div>
  );
}

export default Payment;
