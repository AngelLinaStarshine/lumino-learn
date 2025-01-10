import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Lumi from "./Lumi"; // Import the Lumi component
import "./App.css";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login / Signin</Link>
          </li>
        </ul>
      </nav>

      <div className="content">{children}</div>

      <footer className="footer">
        <div className="social-media-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Luminolearn Academy. All rights reserved.</p>
      </footer>

      {/* Add Lumi to Layout to show it on every page */}
      <Lumi />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const ContactPage = () => (
  <div>
    <h2>Contact Us</h2>
    <p>Reach out to learn more about how we can help your child excel.</p>
  </div>
);

const LoginPage = () => (
  <div>
    <h2>Login / Signin</h2>
    <p>Please login or sign in to access your account.</p>
  </div>
);

export default App;
