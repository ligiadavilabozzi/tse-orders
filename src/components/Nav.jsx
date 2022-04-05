import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="rtb.png" alt="logo rtb house" />
      </div>
      <ul className="nav-links">
        <Link to="/">Orders</Link>
        <Link to="/info">Info</Link>
      </ul>
    </div>
  );
}
