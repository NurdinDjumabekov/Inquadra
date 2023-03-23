import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/hoc/Layout/Layout";
import { MorePostUrl } from "./components/MorePostUrl/MorePostUrl";
import { MainPage } from "./pages/MainPage";
import { NotPage } from "./pages/NotPage";
import { PostsPage } from "./pages/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
        <Route path="/posts/:id/url" element={<MorePostUrl />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
