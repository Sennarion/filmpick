import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '5ba51c2da469b356ab2a1378773a169b'
};

async function getTrendingMovies() {
  const { data } = await axios.get('/trending/movie/day');
  return data;
}

async function getMovieByName(movieName: string) {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: movieName
    }
  });
  return data;
}

async function getMovieById(movieId: string) {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}

async function getMovieCredits(movieId: string) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data;
}

async function getMovieReviews(movieId: string) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
}

export const api = {
  getTrendingMovies,
  getMovieByName,
  getMovieById,
  getMovieCredits,
  getMovieReviews
};
