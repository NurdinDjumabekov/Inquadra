import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import BlockPage from "./pages/blockPage/BlockPage";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { UserPage } from "./pages/userPage/UserPage";
import { NavBar } from "./components/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/block" element={<BlockPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
