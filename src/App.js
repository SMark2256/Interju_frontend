import HeaderComp from "./components/header/headerComp";
// import IMDB_COMP from "./components/test/imdb";
import MovieListComp from "./components/movies/movielistComp";
import FooterComp from "./components/footer/footerComp";
import SidebarComp from "./components/sidebar/sidebarComp";

import { useEffect, useState } from "react";
import "./App.css";
import SeacrhComp from "./components/search/seacrhComp";

const App = () => {
    const [movies, setMovies] = useState(null);
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const moviesObj = {
        movies,
        setMovies,
        sideBarOpen,
    };

    const sidebarObj = {
        sideBarOpen,
        setSideBarOpen,
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    return (
        <div className="overflow-hidden bg-black h-[100vh] flex flex-col">
            <section className="flex flex-row h-full">
                <div className="flex flex-col ">
                    <HeaderComp sideBarOpen={sideBarOpen} />
                    <SidebarComp sidebarObj={sidebarObj} />
                </div>
                <div className="flex flex-col w-full">
                    <SeacrhComp />
                    {/* <IMDB_COMP moviesObj={moviesObj} /> */}
                    <MovieListComp moviesObj={moviesObj} />
                </div>
            </section>
            {/* <section className="w-full h-full">
                <FooterComp />
            </section> */}
        </div>
    );
};

export default App;
