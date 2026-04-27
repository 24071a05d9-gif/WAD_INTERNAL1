import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser, resetBooking } = useBooking();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setUser({ email });
    resetBooking();
    navigate('/movies');
  };

  return (
    <div className="card auth-card">
      <h2>Sign in to book a movie</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </label>
        {error && <div className="alert">{error}</div>}
        <button type="submit" className="button button-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
