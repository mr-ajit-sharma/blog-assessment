import React, { useState } from "react";
import "../styles/header.css";
import "boxicons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className={`nav-items ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>World</li>
          <li>Technology</li>
          <li>Design</li>
          <li>Culture</li>
          <li>U.S</li>
          <li>Business</li>
          <li>Politics</li>
          <li>Opinion</li>
          <li>Science</li>
          <li>Health</li>
          <li>Style</li>
          <li>Travel</li>
        </ul>
      </nav>
      <div className="icon" onClick={toggleMenu}>
        <box-icon color="white" name="menu"></box-icon>
      </div>
    </header>
  );
};

export default Header;
