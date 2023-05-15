import axios from 'axios';

const BASE_URL = 'https://crudcrud.com/api/3fff2f97513842bf933d7b0182bf3f90';

export const getMovies = () => {
  return axios.get(`${BASE_URL}/movies`);
};

export const postMovie = movie => {
  return axios.post(`${BASE_URL}/movies`, movie);
};

export const deleteMovieById = id => {
  return axios.delete(`${BASE_URL}/movies/${id}`);
};

export const updateMovie = movie => {
  const details = {...movie};
  delete details._id;

  return axios.put(`${BASE_URL}/movies/${movie._id}`, details);
};
