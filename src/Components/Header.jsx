import React from "react";
import '../Css/header.css'


function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="navbar">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">PRODUCTS</a>
            <a href="#">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
