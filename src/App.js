import { useEffect, useState } from "react";
import HeaderComp from "./components/header/headerComp";
// import IMDB_COMP from "./components/test/imdb";
import MovieListComp from "./components/movies/movielistComp";
import FooterComp from "./components/footer/footerComp";
import SidebarComp from "./components/sidebar/sidebarComp";
import SeacrhComp from "./components/search/seacrhComp";
import DetailsCardComp from "./components/movies/detailscardComp";
import PageMotion from "./components/motion/PageMotion";

import "./App.css";

const App = () => {
    const [movies, setMovies] = useState(null);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const moviesObj = {
        movies,
        setMovies,
        sideBarOpen,
        setSelectedMovie,
    };

    const sidebarObj = {
        sideBarOpen,
        setSideBarOpen,
    };

    const detailsCardObj = {
        selectedMovie,
        setSelectedMovie,
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);
    useEffect(() => {
        console.log(selectedMovie);
    }, [selectedMovie]);

    return (
        <div className="overflow-hidden bg-black h-[100vh] flex flex-col relative">
            {selectedMovie && (
                <PageMotion>
                    <DetailsCardComp detailsCardObj={detailsCardObj} />
                </PageMotion>
            )}
            <section
                className={`flex flex-row h-full ${
                    selectedMovie != null ? "blur-lg pointer-events-none" : ""
                }`}
            >
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
