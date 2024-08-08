import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../features/movies/movieSlice";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const query = useQuery();
  const searchQuery = query.get("query").toLowerCase();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies) {
      const results = movies.records.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery)
      );
      setFilteredMovies(results);
    }
  }, [movies, searchQuery]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {filteredMovies.map((movie) => (
          <div key={movie.id} style={{ marginBottom: "20px" }}>
            <h3>{movie.title}</h3>
            <img
              src={movie.imageUrl}
              alt={movie.title}
              style={{ width: "200px", height: "300px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
