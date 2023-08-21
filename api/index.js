
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg'
	}
};

export const apiBaseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
	return await fetch(`${apiBaseUrl}/trending/movie/day?language=en-US`, options)
		.then(response => response.json())
		.catch(e => console.error('API Error: ', e))

}

export const getPopularTvShows = async () => {
	return await fetch(`${apiBaseUrl}/tv/popular?language=en-US&page=1`, options)
		.then(response => response.json())
		.catch(e => console.error('API Error: ', e))

}


const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;