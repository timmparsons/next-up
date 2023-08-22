const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg',
  },
};

export const apiBaseUrl = 'https://api.themoviedb.org/3';

// Movies
export const getTrendingMovies = async () => {
  return await fetch(`${apiBaseUrl}/trending/movie/day?language=en-US`, options)
    .then((response) => response.json())
    .catch((e) => console.error('getTrendingMovies API Error: ', e));
};

export const searchMovie = async (query) => {
  console.log('Query: ', query);
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => {
      console.log('RESPONSE ', response.json());
      return response.json();
    })
    .catch((e) => console.error('searchMovie API Error: ', e));
};

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;

// TV Shows
export const getPopularTvShows = async () => {
  return await fetch(`${apiBaseUrl}/tv/popular?language=en-US&page=1`, options)
    .then((response) => response.json())
    .catch((e) => console.error('getPopularTvShows API Error: ', e));
};
