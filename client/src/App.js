import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandHowerState from "./pages/LandHowerState";
import SignUpPageFounder from "./pages/SignUpPageFounder";
import LoginPageInvestor from "./pages/LoginPageInvestor";
import LoginPageFounder from "./pages/LoginPageFounder";
import SignUpPageInvestor from "./pages/SignUpPageInvestor";
import FounderForm from "./pages/FounderForm";
import InvestorForm from "./pages/InvestorForm";
import Videoreview from "./pages/Videoreview";
import VideoList from "./pages/VideoList";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page-founder":
        title = "";
        metaDescription = "";
        break;
      case "/login-page-investor":
        title = "";
        metaDescription = "";
        break;
      case "/login-page-founder":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page-investor":
        title = "";
        metaDescription = "";
        break;
      case "/founderform":
        title = "";
        metaDescription = "";
        break;
      case "/investorform":
        title = "";
        metaDescription = "";
        break;
      case "/videoreview":
        title = "";
        metaDescription = "";
        break;
      case "/videolist":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandHowerState />} />

      <Route path="/signup-page-founder" element={<SignUpPageFounder />} />

      <Route path="/login-page-investor" element={<LoginPageInvestor />} />

      <Route path="/login-page-founder" element={<LoginPageFounder />} />

      <Route path="/signup-page-investor" element={<SignUpPageInvestor />} />

      <Route path="/founderform" element={<FounderForm />} />

      <Route path="/investorform" element={<InvestorForm />} />

      <Route path="/videoreview" element={<Videoreview />} />

      <Route path="/videolist" element={<VideoList />} />
    </Routes>
  );
}
export default App;
