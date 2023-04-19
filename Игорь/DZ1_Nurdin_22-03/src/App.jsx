import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import AboutPokemon from "./pages/AboutPokemon/AboutPokemon";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">MainPage</NavLink>
          </li>
          <li>
            <NavLink to="/about">AboutPage</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">PokemonPage</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/pokemon/:name" element={<AboutPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
