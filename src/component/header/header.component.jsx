import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "./header.styles.scss";

function Header(props) {
  return (
    <header className="page-header">
      <div className="nav-center">
        <div className="nav-header">
          <h1 className="page-title">
            Erick <span className="bold">Sixto</span>
          </h1>
        </div>
        <button className="nav-btn">
          <HiMenu />
        </button>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              <span className="hover-3">Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              <span className="hover-3">Contact</span>
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
        </ul>
      </div>
    </header>
  );
}

export default Header;
