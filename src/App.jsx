import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import SearchResults from "./components/SearchResults";
import BookingPage from "./components/BookingPage";
import FinalBookingPage from "./components/FinalBookingPage";
import Events from "./components/Events";
import UpComingMovieList from "./components/UpcomingMovieList";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/upcoming" element={<UpComingMovieList />} />
          <Route path="/events" element={<Events />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/final-booking-page" element={<FinalBookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
