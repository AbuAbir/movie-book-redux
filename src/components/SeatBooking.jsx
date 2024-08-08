import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeats } from "../features/seats/seatSlice";

const SeatBooking = ({ onSeatsSelected, numberOfTickets }) => {
  const dispatch = useDispatch();
  const seats = useSelector((state) => state.seats.records);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    dispatch(fetchSeats());
  }, [dispatch]);

  useEffect(() => {
    onSeatsSelected(selectedSeats);
  }, [selectedSeats,onSeatsSelected]);

  const handleSelectSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else if (selectedSeats.length < numberOfTickets) {
      setSelectedSeats([...selectedSeats, seatId]);
    } else {
      alert(`You can only select ${numberOfTickets} seats.`);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {seats.map((seat) => (
        <button
          key={seat.id}
          disabled={seat.isBooked}
          onClick={() => handleSelectSeat(seat.id)}
          style={{
            margin: "5px",
            backgroundColor: selectedSeats.includes(seat.id) ? "yellow" : "",
            color: seat.isBooked ? "#ccc" : "#000",
            pointerEvents: seat.isBooked ? "none" : "auto",
          }}
        >
          {seat.row}
          {seat.number}
        </button>
      ))}
    </div>
  );
};

export default SeatBooking;
