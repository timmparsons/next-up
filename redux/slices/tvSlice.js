import { createSlice } from '@reduxjs/toolkit'
import { fetchTvShows } from '../extraReducers'

const initialState = {
  tvShows: [],
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
	extraReducers(builder) {
		builder
		.addCase(fetchTvShows.pending, (state, action) => {
			state.status = 'loading'
		})
		.addCase(fetchTvShows.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.tvShows = action.payload.results
		})
		.addCase(fetchTvShows.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
	}
})

// Action creators are generated for each case reducer function
export const { addTvShows } = tvSlice.actions

export default tvSlice.reducer