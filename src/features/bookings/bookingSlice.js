import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await axios.get("http://localhost:3001/bookings");
    return response.data;
  }
);

export const addBooking = createAsyncThunk(
  "bookings/addBooking",
  async (bookingDetails, { dispatch }) => {
    const response = await axios.post(
      "http://localhost:3001/bookings",
      bookingDetails
    );

    const seatUpdates = bookingDetails.seats.map((seatId) =>
      axios.patch(`http://localhost:3001/seats/${seatId}`, { isBooked: true })
    );

    await Promise.all(seatUpdates);
    dispatch(setCurrentBooking(response.data));
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    entities: [],
    fetchBookingStatus: "idle",
    addBookingStatus: "idle",
    currentBooking: null,
  },
  reducers: {
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.pending, (state, action) => {
        state.fetchBookingStatus = "loading";
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.fetchBookingStatus = "succeeded";
        state.entities = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.fetchBookingStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(addBooking.pending, (state, action) => {
        state.addBookingStatus = "loading";
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.addBookingStatus = "succeeded";
        state.entities.push(action.payload);
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.addBookingStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setCurrentBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
