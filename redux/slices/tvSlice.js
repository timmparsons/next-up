import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tvShows: [],
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload.results
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTvShows } = tvSlice.actions

export default tvSlice.reducer