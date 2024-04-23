// SiteRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import About from "./About"; // Correct the path to the About component
import App from "../App"; // Correct the path to the App component

const SiteRoutes = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of SiteRoutes */}
        <Route path="/" element={<App />} />{" "}
        {/* Route for the main App component */}
        <Route path="/about" element={<About />} />{" "}
        {/* Route for the About component */}
      </Routes>{" "}
      {/* Use Routes instead of SiteRoutes */}
    </Router>
  );
};

export default SiteRoutes;
