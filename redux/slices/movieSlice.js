import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiCall } from '../../api'

const initialState = {
  movieList: [],
	status: 'idle',
	error: null
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
	const response = await apiCall()
	return response
})

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
			const { results } = action.payload;
      state.movieList = results;
    }
  },
	extraReducers(builder) {
		builder
			.addCase(fetchMovies.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.movieList = action.payload.results
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

// Action creators are generated for each case reducer function
export const { addMovies } = movieSlice.actions

//Selectors
export const selectAllMovies = state => state.movieList;

export default movieSlice.reducer