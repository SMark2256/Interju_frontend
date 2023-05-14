import { useEffect, useState } from "react";
import HeaderComp from "./components/header/headerComp";
// import IMDB_COMP from "./components/test/imdb";
import MovieListComp from "./components/movies/list/movielistComp";
import SidebarComp from "./components/sidebar/sidebarComp";
import SeacrhComp from "./components/search/seacrhComp";
import DetailsCardComp from "./components/movies/cards/detailscardComp";
import PageMotion from "./components/motion/PageMotion";
import { getMovies } from "./api/requests";

import "./App.css";
import AddMovieDetailsComp from "./components/movies/add/addmoviedetailsComp";

const App = () => {
    const [movies, setMovies] = useState(null);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [addMovieClicked, setAddMovieClicked] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState(null);

    const searchObj = {
        movies,
        setMovies,
    };

    const moviesObj = {
        movies,
        setMovies,
        sideBarOpen,
        setSelectedMovie,
        setAddMovieClicked,
        filteredMovies,
        setFilteredMovies,
    };

    const sidebarObj = {
        sideBarOpen,
        setSideBarOpen,
        movies,
        filteredMovies,
        setFilteredMovies,
    };

    const detailsCardObj = {
        selectedMovie,
        setSelectedMovie,
        setRefresh,
    };

    const addmovieObj = {
        setAddMovieClicked,
        setRefresh,
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);
    useEffect(() => {
        console.log(selectedMovie);
    }, [selectedMovie]);
    useEffect(() => {
        getMovies()
            .then((res) => {
                setMovies(res.data);
                setFilteredMovies(res.data);
                console.log(res.statusText);
            })
            .catch((err) => console.log(err));
        setRefresh(false);
    }, [movies === null || refresh === true]);

    return (
        <div className="overflow-hidden bg-black h-[100vh] flex flex-col relative">
            {selectedMovie && (
                <PageMotion>
                    <DetailsCardComp detailsCardObj={detailsCardObj} />
                </PageMotion>
            )}
            {addMovieClicked && (
                <PageMotion>
                    <AddMovieDetailsComp addmovieObj={addmovieObj} />
                </PageMotion>
            )}
            <section
                className={`flex flex-row h-full ${
                    selectedMovie != null || addMovieClicked != null
                        ? "blur-lg pointer-events-none"
                        : ""
                }`}
            >
                <div className="flex flex-col ">
                    <HeaderComp sideBarOpen={sideBarOpen} />
                    <SidebarComp sidebarObj={sidebarObj} />
                </div>
                <div className="flex flex-col w-full">
                    <SeacrhComp searchObj={searchObj} />
                    {/* <IMDB_COMP moviesObj={moviesObj} /> */}
                    <MovieListComp moviesObj={moviesObj} />
                </div>
            </section>
        </div>
    );
};

export default App;
