import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
