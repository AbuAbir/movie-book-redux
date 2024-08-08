import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import bookingReducer from "../features/bookings/bookingSlice";
import seatReducer from "../features/seats/seatSlice";
import eventSlice from "../features/events/eventSlice";

export const Store = configureStore({
  reducer: {
    movies: movieReducer,
    bookings: bookingReducer,
    seats: seatReducer,
    events: eventSlice,
  },
});
