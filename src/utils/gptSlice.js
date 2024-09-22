import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSerach: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSerachView: (state, action) => {
      state.showGptSerach = !state.showGptSerach;
    },
    addGtpMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSerachView, addGtpMovies } = gptSlice.actions;

export default gptSlice.reducer;
