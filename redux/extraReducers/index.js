import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../api';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
	const response = await apiCall()
	return response;
})