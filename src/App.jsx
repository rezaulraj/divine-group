import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import AboutUsPage from "./pages/aboutus/AboutUsPage";
import NotFoundPage from "./components/NotFoundPage";
import { TimeLine } from "./pages/timeline/TimeLine";
import InfoComTech from "./pages/ict/InfoComTech";
import RealState from "./pages/realstate/RealState";
import Hospitality from "./pages/hospitality/Hospitality";
import Media from "./pages/media/Media";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route
            path="/information-communication-technology"
            element={<InfoComTech />}
          />
          <Route path="/real-estate" element={<RealState />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/media" element={<Media />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
