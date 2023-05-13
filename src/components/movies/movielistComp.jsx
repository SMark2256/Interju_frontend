import MovieComp from "./thumbcardComp";
import { getMovies } from "../../api/requests";
import { useEffect } from "react";
import { motion } from "framer-motion";

const MovieListComp = (props) => {
    const { movies, setMovies, sideBarOpen, setSelectedMovie } =
        props.moviesObj;

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    useEffect(() => {
        getMovies()
            .then((res) => setMovies(res.data))
            .catch((err) => console.log(err));
    }, [movies === null]);

    return (
        <div
            className={`bg-gray-950/80 text-white  relative overflow-auto h-auto w-full items-center justify-center p-4 pr-0 text-center`}
        >
            {movies != null ? (
                <motion.ul
                    className={`${
                        sideBarOpen ? "grid-cols-1" : "grid-cols-2 "
                    } md:grid-cols-5 lg:grid-cols-6 grid gap-4 md:gap-10 mr-5`}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {movies.map((movie, index) => (
                        <motion.li key={index} variants={item}>
                            <MovieComp
                                movie={movie}
                                setSelectedMovie={setSelectedMovie}
                                key={index}
                            />
                        </motion.li>
                    ))}
                </motion.ul>
            ) : (
                <div>no movies</div>
            )}
        </div>
    );
};

export default MovieListComp;
