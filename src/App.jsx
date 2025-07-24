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
import Design from "./pages/design/Design";
import ManufacturingLogic from "./pages/manufacturing/ManufacturingLogic";
import Education from "./pages/education/Education";
import Tourism from "./pages/tourism/Tourism";
import SmeEntor from "./pages/sme/SmeEntor";
import Science from "./pages/science/Science";
import Retail from "./pages/retail/Retail";
import ContactPage from "./pages/contact/ContactPage";
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
          <Route path="/design" element={<Design />} />
          <Route path="/education" element={<Education />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/science" element={<Science />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/smes-and-entrepreneurship" element={<SmeEntor />} />
          <Route
            path="/manufacturing-and-logistics"
            element={<ManufacturingLogic />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
