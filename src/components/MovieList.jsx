import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/movieSlice";
import { useNavigate } from "react-router-dom";


const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.records.filter(movie => movie.isLatest));

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (movies.status === "loading") return <div> Loading....</div>;
  if (movies.status === "failed") return <div>Error{movies.error}</div>;

  const handleBookClick = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "20px" }}>
          <h3>{movie.title}</h3>
          <img
            src={movie.imageUrl}
            alt={movie.title}
            style={{ width: "200px", height: "300px" }}
          />
          <p>{movie.description}</p>
          <p>{movie.releaseDate}</p>
          <button
            style={{
              padding: "8px 16px",
              fontSize: "0.9rem",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              outline: "none",
              background: "linear-gradient(45deg, #FF8C00, #FF6347)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background 0.3s ease",
            }}
            onClick={() => handleBookClick(movie.id)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
