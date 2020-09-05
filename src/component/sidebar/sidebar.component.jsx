import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./sidebar.styles.scss";
const Sidebar = ({ visible, hideSidebar }) => {
  return (
    <aside className={"sidebar " + (visible && "show-sidebar")} id="sidebar">
      <div>
        <button className="close-btn" onClick={hideSidebar}>
          <FaTimes />
        </button>
        <ul className="sidebar-links">
          <li>
            <Link className="sidebar-link" to="/">
              <span onClick={hideSidebar}>Home</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar-link" to="/contact">
              <span onClick={hideSidebar}>Contact</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar-link" to="/about">
              <span onClick={hideSidebar}>About</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar-link" to="/projects">
              <span onClick={hideSidebar}>Projects</span>
            </Link>
          </li>
        </ul>
        <ul className="social-icons"></ul>
      </div>
    </aside>
  );
};

export default Sidebar;
