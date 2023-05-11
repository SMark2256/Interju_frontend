import axios from "axios";

// const BASE_URL = "https://crudcrud.com/api/7f9d8116f4854fc8a1e2dc0a8635bf34";

const BASE_URL = "https://localhost:5000";

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
    return axios.put(`${BASE_URL}/updateAllMovies`, movie);
};
