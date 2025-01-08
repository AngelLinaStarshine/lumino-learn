import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage.js";

const App = () => {
  return (
    <Router>
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

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
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
