import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "./header.styles.scss";

function Header({ showSidebar }) {
  return (
    <header className="page-header">
      <div className="nav-center">
        <div className="nav-header">
          <Link className="title-link" to="/">
            <h1 className="page-title">
              Erick <span className="bold">Sixto</span>
            </h1>
          </Link>
        </div>
        <button className="nav-btn" onClick={showSidebar}>
          <HiMenu />
        </button>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              <span className="hover-3">Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/services">
              <span className="hover-3">Services</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              <span className="hover-3">About</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/projects">
              <span className="hover-3">Projects</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link contact" to="/contact">
              <span className="hover-3">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
