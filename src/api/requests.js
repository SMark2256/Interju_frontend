import axios from "axios";

const BASE_URL = "https://crudcrud.com/api/3fff2f97513842bf933d7b0182bf3f90";

export const getAllMovies = () => {
    return axios.get(`${BASE_URL}`);
};

export const getMovieByPegi = (pegi) => {
    return axios.get(`${BASE_URL}?pegi=${pegi}`);
};
export const postMovie = (movie) => {
    return axios.post(`${BASE_URL}`, movie);
};

export const deleteMovieById = () => {
    return axios.delete(`${BASE_URL}/unicorns`);
};

export const updateMovie = (movie) => {
    return axios.post(`${BASE_URL}/movies/`, movie);
};
