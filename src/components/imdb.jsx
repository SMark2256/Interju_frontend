import { useEffect, useState } from "react";
import { ImdbApi } from "../api/imdbapi";
import { updateMovie } from "../api/requests";

const IMDB_COMP = (props) => {
    const { setMovies } = props.moviesObj;
    const [data, setData] = useState();
    const [formattedData, setFormattedData] = useState();

    useEffect(() => {
        ImdbApi()
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const addPegi = (data) => {
        data.forEach((item) => {
            if (
                item.genre.includes("Action") ||
                item.genre.includes("Crime") ||
                item.genre.includes("Thriller") ||
                item.genre.includes("Romance")
            ) {
                item.pegi = 16;
            } else if (item.genre.includes("Horror")) {
                item.pegi = 18;
            } else if (item.genre.includes("Family")) {
                item.pegi = 7;
            } else {
                item.pegi = 16;
            }
        });
        setMovies(
            data.map((item) => ({
                title: item.title,
                director: item.director,
                genre: item.genre,
                pegi: item.pegi,
                image: item.image,
                description: item.description,
                trailer: item.trailer,
                year: item.year,
            }))
        );
    };

    const updateMovies = (movie) => {
        updateMovie(movie)
            .then(() => {
                console.log("updated");
            })
            .catch((error) => {
                console.error("Error update movies:", error);
            });
    };

    return (
        <>
            <div
                className="text-white bg-gray-800"
                onClick={() => addPegi(data)}
            >
                imdb
            </div>
            {/* <div onClick={() => updateMovies(formattedData)}>unicorn</div>; */}
        </>
    );
};

export default IMDB_COMP;
