import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <header style={{ background: "#333", color: "#fff", padding: "10px 20px" }}>
      <h1>E-Cube</h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink
              className="navlink"
              to="/"
              style={{
                textDecoration: "none",
                padding: "10px",
                background: "yellow",
              }}
            >
              Latest Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/upcoming"
              style={{
                textDecoration: "none",
                padding: "10px",
                background: "green",
              }}
            >
              Upcoming Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/events"
              style={{
                textDecoration: "none",
                padding: "10px",
                background: "aqua",
              }}
            >
              Events
            </NavLink>
          </li>
          <li style={{ marginLeft: "auto" }}>
            <SearchField />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
