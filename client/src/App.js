import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import LandHowerState from "./pages/LandHowerState";
import SignUpPageFounder from "./pages/SignUpPageFounder";
import LoginPageInvestor from "./pages/LoginPageInvestor";
import LoginPageFounder from "./pages/LoginPageFounder";
import SignUpPageInvestor from "./pages/SignUpPageInvestor";
import FounderForm from "./pages/FounderForm";
import InvestorForm from "./pages/InvestorForm";
import VideoList from "./pages/VideoList";
import InvestorForm2 from "./pages/InvestorForm2";
import VideoUploadingPage from "./pages/VideoUploadingPage";
import Videoplayer from "./pages/Videoplayer";
import Reviews from "./pages/Reviews";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandHowerState />} />

      <Route path="/signup-page-founder" element={<SignUpPageFounder />} />

      <Route path="/signup-page-investor" element={<SignUpPageInvestor />} />

      <Route path="/login-page-investor" element={<LoginPageInvestor />} />

      <Route path="/login-page-founder" element={<LoginPageFounder />} />

      <Route path="/founderform" element={<FounderForm />} />

      <Route path="/investorform" element={<InvestorForm />} />

      <Route path="/videolist" element={<VideoList />} />

      <Route path="/investorform2" element={<InvestorForm2 />} />

      <Route path="/video-uploading-page" element={<VideoUploadingPage />} />

      <Route path="/videoplayer" element={<Videoplayer />} />

      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}
export default App;
