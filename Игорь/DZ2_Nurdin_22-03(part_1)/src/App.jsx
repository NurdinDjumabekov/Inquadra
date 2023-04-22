import { NavLink, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import PostPage from "./pages/PostPage/PostPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NavLinks from "./components/NavLinks/NavLinks";
import AboutEveryPost from "./pages/AboutEveryPost/AboutEveryPost";
import CreatePostsPage from "./pages/CreatePostsPage/CreatePostsPage";

function App() {
  return (
    <div>
      <div className="parent_NavLinks">
        <NavLinks />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:id" element={<AboutEveryPost />} />
        <Route path="/createPost" element={<CreatePostsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
