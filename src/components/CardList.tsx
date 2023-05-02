import { useState, useEffect } from "react";
import listGetter from "../alova/listGetter";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const CardList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch the list of movies when the component mounts
    listGetter(1, 10).then((data: { results: Movie[] }) =>
      setMovies(
        data.results.map((movie) => ({
          ...movie,
          poster_path: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }))
      )
    );
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
