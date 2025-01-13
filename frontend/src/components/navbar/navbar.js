import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">Scrapsite</Link>
      </div>
      <div className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
        <Link className="item" to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className="item" to="/create" onClick={toggleMenu}>
          Create
        </Link>
        <Link className="item" to="/about" onClick={toggleMenu}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

