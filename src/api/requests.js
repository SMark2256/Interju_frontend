import axios from "axios";

const BASE_URL = "https://crudcrud.com/api/7f9d8116f4854fc8a1e2dc0a8635bf34";

export const getAllMovies = () => {
    return axios.get(`${BASE_URL}`);
};
