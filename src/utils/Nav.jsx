import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-20">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-300" : " ",
                e.isActive ? "font-bold" : " ",
              ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>
      <NavLink to="/About">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-300" : " ",
                e.isActive ? "font-bold" : " ",
              ].join(" ")}
            >
              About
            </span>
          );
        }}
      </NavLink>
      <NavLink to="/Contact">
      {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-300" : " ",
                e.isActive ? "font-bold" : " ",
              ].join(" ")}
            >
              Contact
            </span>
          );
        }}</NavLink>
    </nav>
  );
};

export default Nav;
