import { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [user, setUser] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState({ cardName: '', cardNumber: '', expiry: '', cvv: '' });

  const resetBooking = () => {
    setSelectedMovie(null);
    setSelectedSeats([]);
    setPaymentInfo({ cardName: '', cardNumber: '', expiry: '', cvv: '' });
  };

  return (
    <BookingContext.Provider
      value={{
        user,
        setUser,
        selectedMovie,
        setSelectedMovie,
        selectedSeats,
        setSelectedSeats,
        paymentInfo,
        setPaymentInfo,
        resetBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}
