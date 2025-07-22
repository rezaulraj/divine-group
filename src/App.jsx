import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import AboutUsPage from "./pages/aboutus/AboutUsPage";
import NotFoundPage from "./components/NotFoundPage";
import { TimeLine } from "./pages/timeline/TimeLine";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
