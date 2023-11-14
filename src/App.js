// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'HENRY V', description: 'Le Roi Henry V d Angleterre décide de faire valoir ses droits à la couronne de France Il décide alors de mener une bataille contre la France', postURL: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Henry_v_post.jpg', rating: 4.5 },
    { title: 'BODIES', description: 'Quatre détectives à quatre époques différentes de Londres se retrouvent à enquêter sur le même meurtre', posterURL: 'https://m.media-amazon.com/images/M/MV5BMWNkZGNhYzQtY2I4MS00NDQ0LThmYzctNDk5NmEwMzE0MzU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg', rating: 3.8 },
    { title: 'BREAKING BAD', description: 'Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. ', posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/18/12/11/3956503.jpg', rating: 4 },
  
  ]);


  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');

  const handleTitleChange = (title) => {
    setFilterTitle(title);
  };

  const handleRateChange = (rate) => {
    setFilterRate(rate);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);

  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRate={filterRate}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
      {/* Add a form or button to add new movies */}
    </div>
  );
};

export default App;
