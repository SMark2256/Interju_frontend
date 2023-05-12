import HeaderComp from "./components/header/headerComp";
import IMDB_COMP from "./components/imdb";
import ListComp from "./components/list/listComp";
import "./App.css";

import { useEffect, useState } from "react";
const App = () => {
    const [movies, setMovies] = useState(null);

    const moviesObj = {
        setMovies: setMovies,
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    return (
        <div className="overflow-hidden bg-black h-[100vh]">
            <HeaderComp />
            <IMDB_COMP moviesObj={moviesObj} />
            <ListComp movies={movies} />
            <section className="flex items-center justify-center h-10">
                <p className="text-xs text-gray-300/50">
                    Created By - Scridon-Siklódi Márk
                </p>
            </section>
        </div>
    );
};

export default App;
