import axios from "axios";

export const ImdbApi = () => {
    return axios.get("https://imdb-top-100-movies.p.rapidapi.com/", {
        headers: {
            "X-RapidAPI-Key":
                "c15b689e95msh1d636f110ea0001p11c325jsndbd6155c0d06",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
    });
};
