import {useEffect, useState} from 'react';
import {ImdbApi} from '../../api/imdbapi';
import {updateMovie} from '../../api/requests';

const IMDB_COMP = () => {
  const [data, setData] = useState();
  const [formattedData, setFormattedData] = useState();

  useEffect(() => {
    ImdbApi()
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const addPegi = data => {
    data.forEach(item => {
      if (
        item.genre.includes('Action') ||
        item.genre.includes('Crime') ||
        item.genre.includes('Thriller') ||
        item.genre.includes('Romance')
      ) {
        item.pegi = 16;
      } else if (item.genre.includes('Horror')) {
        item.pegi = 18;
      } else if (item.genre.includes('Family')) {
        item.pegi = 7;
      } else {
        item.pegi = 16;
      }
    });
    setFormattedData(
      data.map(item => ({
        title: item.title,
        director: item.director,
        genre: item.genre,
        pegi: item.pegi,
        image: item.image,
        description: item.description,
        trailer: item.trailer,
        year: item.year,
      })),
    );
  };

  const uploadOneItem = item => {
    updateMovie(item)
      .then(() => {
        console.log('updated');
      })
      .catch(error => {
        console.error('Error update movies:', error);
      });
  };

  const updateMovies = movie => {
    movie.map(item => uploadOneItem(item));
  };

  return (
    <div className="flex flex-row">
      <div
        className="text-white bg-gray-800 hover:cursor-pointer select-none hover:underline w-32 text-center"
        onClick={() => addPegi(data)}>
        imdb
      </div>
      <div
        className="text-white hover:cursor-pointer select-none hover:underline text-center w-32"
        onClick={() => updateMovies(formattedData)}>
        unicorn
      </div>
      ;
    </div>
  );
};

export default IMDB_COMP;
