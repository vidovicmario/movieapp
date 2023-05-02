import { Route, Routes } from "react-router-dom";
import { useRequest } from "alova";
import listGetter from "./alova/listGetter";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import BookmarkAndFavoriteMovies from "./pages/BookmarkAndFavoriteMovies";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { data } = useRequest(listGetter, { initialData: [] });
  console.log(data);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/movie-details" element={<MovieDetails />} />
        <Route index path="/bookmark-favorites-movies" element={<BookmarkAndFavoriteMovies />} />
      </Routes>
    </>
  );
}

export default App;
