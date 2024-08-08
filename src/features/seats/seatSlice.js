import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSeats = createAsyncThunk("seats/fetchSeats", async () => {
  const response = await axios.get("http://localhost:3001/seats");
  return response.data;
});

const seatSlice = createSlice({
  name: "seats",
  initialState: {
    records: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSeats.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSeats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.records = action.payload;
      })
      .addCase(fetchSeats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default seatSlice.reducer;