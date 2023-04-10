import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Footer from "./components/Sections/Footer.jsx"
import { Route, Routes } from "react-router-dom";
import Form from "./screens/form/Form.jsx";
import Terms from "./components/Terms.js";
import Privacy from "./components/Privacy.js";
// import { ToastContainer} from 'react-toastify';

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <TopNavbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration-form" element={<Form />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {/* <Footer /> */}

      {/* <Landing /> */}
    </>
  );
}
