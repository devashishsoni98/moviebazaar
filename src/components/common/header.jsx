import React, { useState} from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import { UserAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import Headroom from "react-headroom";


const Navbar = ({ onSearch, onHomeClick }) => {
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

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
    <Headroom className='headr'
    style={{
      webkitTransition: 'all .5s ease',
      mozTransition: 'all .5s ease',
      oTransition: 'all .5s ease',
      transition: 'all .5s ease'
    }}
    >
    <header>
      <h3>
        <Link className="logo" to="/" onClick={onHomeClick}>
          MB
        </Link>
      </h3>
      <nav className="navi" ref={navRef}>
        
        <Link
  className="link"
  to="/"
  onClick={() => {
    if (typeof onHomeClick === 'function') {
      onHomeClick(); 
    }
    closeNavbar(); 
  }}
>
  Home
</Link>
        {!user && (
          <Link className="link" to="/login" onClick={showNavbar}>
            Login
          </Link>
        )}

        {/* <Link className="link" to="/">Blog</Link> */}
        {/* <Link className="link" to="/">About me</Link> */}


        {!hideSearchBar && <SearchBar onSearch={onSearch} onClose={closeNavbar} />}

        {user && (
          <li className="dropdown">
            <span
              className="profile"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Profile{" "}
              {dropdownOpen ? (
                <BsCaretUpFill className="icon-p" />
              ) : (
                <BsCaretDownFill className="icon-p" />
              )}
            </span>
            <ul className={`dropdown-content ${dropdownOpen ? "open" : ""}`}>
              <li className="d-list">
                <Link className="d-list" to="/profile">{user.displayName}</Link>
              </li>
              <li className="d-list" onClick={handleSignOut}>
                Sign Out
              </li>
            </ul>
          </li>
        )}
        {user && (
          <img src={user.photoURL} alt="Profile" className="profile-picture" />
        )}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    </Headroom>
    </>
  );
};

export default Navbar;

