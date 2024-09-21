import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tailerVideo: null,
  },
  reducers: {
    addNowPlayingMoveis: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.tailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMoveis, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
