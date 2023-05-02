import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import BookmarkAndFavoriteMovies from "./pages/BookmarkAndFavoriteMovies";
import "./App.css";

function App() {
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
