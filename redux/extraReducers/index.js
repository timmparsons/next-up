import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrendingMovies, getPopularTvShows } from '../../api';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
	const response = await getTrendingMovies()
	return response;
})

export const fetchTvShows = createAsyncThunk('tv/fetchTvShows', async () => {
	const response = await getPopularTvShows()
	return response;
})