import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchedMovie)}`);
  };
  return (
    <form onSubmit={handleSearch} style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="Search Movies"
        value={searchedMovie}
        onChange={(event) => setSearchedMovie(event.target.value)}
        style={{ padding: "5px" }}
      />
      <button type="submit" style={{ padding: "5px", borderRadius: "4px",
              cursor: "pointer",
              outline: "none",
              background: "linear-gradient(45deg, #FF8C00, #FF6347)", }}>
        Search
      </button>
    </form>
  );
};

export default SearchField;
