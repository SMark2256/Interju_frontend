import {useEffect, useState} from 'react';
import {getMovies} from './api/requests';
import HeaderComp from './components/header/headerComp';
import MovieListComp from './components/movies/list/movielistComp';
import SidebarComp from './components/sidebar/sidebarComp';
import DetailsCardComp from './components/movies/cards/detailscardComp';
import PageMotion from './components/motion/PageMotion';
import AddMovieDetailsComp from './components/movies/add/addmoviedetailsComp';
// import IMDB_COMP from "./components/test/imdb";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [addMovieClicked, setAddMovieClicked] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(null);

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
    getMovies()
      .then(res => {
        setMovies(res.data);
        setFilteredMovies(res.data);
      })
      .catch(err => console.log(err));
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
            ? 'blur-lg pointer-events-none'
            : ''
        }`}>
        <div className="flex flex-col ">
          <HeaderComp sideBarOpen={sideBarOpen} />
          <SidebarComp sidebarObj={sidebarObj} />
        </div>
        <div className="flex flex-col w-full">
          {/* <IMDB_COMP moviesObj={moviesObj} /> */}
          <MovieListComp moviesObj={moviesObj} />
        </div>
      </section>
    </div>
  );
};

export default App;
