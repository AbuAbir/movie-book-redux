import { useSelector } from "react-redux";
import { QRCodeSVG } from "qrcode.react";

const FinalBookingPage = () => {
  const currentBooking = useSelector((state) => state.bookings.currentBooking);

  // Check if currentBooking exists before rendering
  if (!currentBooking) {
    return "You didn't book a ticket, you came straight to this page"; // If currentBooking doesn't have a value, return null to prevent rendering the component
  }

  const bookingDetailsStr = JSON.stringify(currentBooking);

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Here is your booking QR Code:</p>
      <QRCodeSVG value={bookingDetailsStr} size={256} level={"H"} />
      <p>Movie Booked successfully</p>
    </div>
  );
};

export default FinalBookingPage;
