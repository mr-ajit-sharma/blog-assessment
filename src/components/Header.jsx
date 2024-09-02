import React from "react";
import "../styles/header.css";
import "boxicons";
const Header = () => {
  return (
    <header className="header">
      <nav>
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
      <div className="icon">
        <box-icon color="red" name="menu"></box-icon>
      </div>
    </header>
  );
};

export default Header;
