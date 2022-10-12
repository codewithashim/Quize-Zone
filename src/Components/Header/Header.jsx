import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navBar shadow bg-gray-900">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink to="/topic">Topic</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </div>
  );
};

export default Header;
