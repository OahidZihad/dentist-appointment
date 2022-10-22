import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./navbar.css";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <Link to="/" class="btn capitalize mx-1 text-white">
        Home
      </Link>
      <Link to="/about" class="btn btn-ghost capitalize font-bold">
        About
      </Link>
      <Link to="/appointment" class="btn btn-ghost capitalize font-bold">
        Appointment
      </Link>
      <Link to="/review" class="btn btn-ghost capitalize font-bold">
        Reviews
      </Link>
      <Link to="/contact" class="btn btn-ghost capitalize font-bold">
        Contact Us
      </Link>
      {user && (
        <Link to="/dashboard" class="btn btn-ghost capitalize font-bold">
          Dashboard
        </Link>
      )}
      {user ? (
        <button className="btn btn-ghost" onClick={logout}>
          Sign Out
        </button>
      ) : (
        <Link to="/login" class="btn btn-ghost capitalize font-bold">
          Login
        </Link>
      )}
    </>
  );
  return (
    <div
      className="bg-white sticky top-0 z-10"
      style={{ backgroundColor: "#ECFEFF" }}
    >
      <div class="navbar container mx-auto">
        <div class="navbar-start">
          <Link
            to="/"
            class="btn btn-ghost normal-case text-xl font-bold text-3xl"
          >
            Pritom's Chember
          </Link>
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
    </div>
  );
};

export default Navbar;
