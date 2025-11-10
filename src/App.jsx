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
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import TermAndCondition from "./pages/termcondition/TermAndCondition";
import Partnership from "./pages/partnership/Partnership";
import EmployerService from "./pages/employer/EmployerService";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import ThankYou from "./components/ThankYou";
import Career from "./pages/career/Career";
function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/strategic-partnership" element={<Partnership />} />
          <Route path="/employer-services" element={<EmployerService />} />
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermAndCondition />} />
          <Route path="/smes-and-entrepreneurship" element={<SmeEntor />} />
          <Route
            path="/manufacturing-and-logistics"
            element={<ManufacturingLogic />}
          />
          <Route path="/career" element={<Career />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
