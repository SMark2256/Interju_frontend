import HeaderComp from "./components/header/headerComp";
import IMDB_COMP from "./components/imdb";
import ListComp from "./components/list/listComp";

import { useState } from "react";
const App = () => {
    const [movies, setMovies] = useState(null);

    const moviesObj = {
        setMovies: setMovies,
    };

    return (
        <div className="">
            <HeaderComp />
            <IMDB_COMP moviesObj={moviesObj} />
            <ListComp movies={movies} />
        </div>
    );
};

export default App;
