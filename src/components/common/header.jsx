import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import { UserAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const Header = ({ onSearch, onHomeClick }) => {
  const { user, logOut } = UserAuth();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");

    if (confirmSignOut) {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const hideSearchBar =
    location.pathname === "/profile" ||
    location.pathname === "/login" ||
    location.pathname.startsWith("/movie/");

  return (
    <header className="header">
      <div className="header-container">
        <Link className="navbar-brand" to="/" onClick={onHomeClick}>
          DS
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" onClick={onHomeClick}>
                Home
              </Link>
            </li>
            {user && (
              <li className="dropdown">
                <span className="profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Profile {dropdownOpen ? <BsCaretUpFill className="icon-p" /> : <BsCaretDownFill className="icon-p" />}
                </span>
                <ul className={`dropdown-content ${dropdownOpen ? "open" : ""}`}>
                  <li>
                    <Link to="/profile">{user.displayName}</Link>
                  </li>
                  <li className="so" onClick={handleSignOut}>Sign Out</li>
                </ul>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!hideSearchBar && <li><SearchBar onSearch={onSearch} /></li>}
            {user && (
              <li>
                <div className="profile-picture">
                  <img src={user.photoURL} alt="Profile" />
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
