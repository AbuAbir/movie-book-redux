import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBooking } from "../features/bookings/bookingSlice";
import SeatBooking from "./SeatBooking";

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [showTime, setShowTime] = useState("");
  const [showDate, setShowDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSeatsSelected = (seatId) => {
    setSelectedSeats(seatId);
  };

  const handleSubmitBooking = () => {
    if (selectedSeats.length !== numberOfTickets) {
      alert("The number of selected seats must match the number of tickets.");
      return;
    }

    const bookingDetails = {
      movieId: id,
      seats: selectedSeats,
      numberOfTickets,
      showTime,
      showDate,
    };

    dispatch(addBooking(bookingDetails)).then(() => {
      navigate("/final-booking-page");
    });
  };

  return (
    <div>
      <h2>Book Your Tickets</h2>
      <div>
        <label>
          Number of Tickets:
          <input
            type="number"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(parseInt(e.target.value, 10))}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>
          Show Time:
          <select
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
          >
            <option value="">Select a time</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="8:00 PM">8:00 PM</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Show Date:
          <input
            type="date"
            value={showDate}
            onChange={(e) => setShowDate(e.target.value)}
          />
        </label>
      </div>
      <SeatBooking
        onSeatsSelected={handleSeatsSelected}
        numberOfTickets={numberOfTickets}
      />
      <button
        style={{
          borderRadius: "4px",
          cursor: "pointer",
          outline: "none",
          background: "linear-gradient(45deg, #FF8C00, #FF6347)",
        }}
        onClick={handleSubmitBooking}
      >
        Submit Booking
      </button>
      <div>
        <h3>Booking Summary</h3>
        <p>Tickets: {numberOfTickets}</p>
        <p>Show Time: {showTime}</p>
        <p>Show Date: {showDate}</p>
        <p>Selected Seats: {selectedSeats.join(", ")}</p>
      </div>
    </div>
  );
};

export default BookingPage;
