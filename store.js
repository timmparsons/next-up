import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './redux/slices/movieSlice';
import tvReducer from './redux/slices/tvSlice';

export const store = configureStore({
  reducer: {
		movies: movieReducer,
		tv: tvReducer
	},
})