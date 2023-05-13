import MovieComp from "./thumbcardComp";
import { getMovies } from "../../api/requests";
import { useEffect } from "react";

const MovieListComp = (props) => {
    const { movies, setMovies, sideBarOpen } = props.moviesObj;

    useEffect(() => {
        getMovies()
            .then((res) => setMovies(res.data))
            .catch((err) => console.log(err));
    }, [movies === null]);

    return (
        <div
            className={`bg-gray-950/80 text-white grid ${
                sideBarOpen ? "grid-cols-1" : "grid-cols-2 "
            } md:grid-cols-5 lg:grid-cols-6 gap-4 justify-center p-4 pr-0 text-center relative overflow-auto h-full flex items-center`}
        >
            {movies != null ? (
                movies.map((movie, index) => (
                    <MovieComp movie={movie} key={index} />
                ))
            ) : (
                <div>no movies</div>
            )}
        </div>
    );
};

export default MovieListComp;
