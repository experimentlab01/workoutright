import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      {/* <a href="/" className="navbar-item">Home</a> */}
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/yoga" className="navbar-item">
        Yoga
      </Link>
      <Link to="/counter" className="navbar-item">
        Workout
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>
      {/* <a href="/about" className="navbar-item">About</a>
      <a href="/portfolio" className="navbar-item">Portfolio</a>
      <a href="/shop" className="navbar-item">Shop</a>
      <a href="/blog" className="navbar-item">Blog</a>
      <a href="/contact" className="navbar-item">Contact</a> */}
    </section>
  );
}

export default Navbar;