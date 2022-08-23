import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <Link to="/" class="btn capitalize mx-1 text-white">
        Home
      </Link>
      <Link to="/about" class="btn btn-ghost capitalize">
        About
      </Link>
      <Link to="/appointment" class="btn btn-ghost capitalize">
        Appointment
      </Link>
      <Link to="/review" class="btn btn-ghost capitalize">
        Reviews
      </Link>
      <Link to="/contact" class="btn btn-ghost capitalize">
        Contact Us
      </Link>
      <Link to="/login" class="btn btn-ghost capitalize">
        Login
      </Link>
    </>
  );
  return (
    <div class="navbar bg-base-100 container mx-auto">
      <div class="navbar-start">
        <a class="btn btn-ghost normal-case text-xl">Pritom's Chember</a>
      </div>

      <div className="navbar-end">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{menuItems}</li>
          </ul>
        </div>
        <div class="hidden md:flex">{menuItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
