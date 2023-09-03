import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { FaHome } from "react-icons/fa";
import { BiLogIn, BiSolidUser } from "react-icons/bi";
import { UserAuth } from "../Context/AuthContext";

const Header = () => {
  const { user, logOut } = UserAuth();

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

  return (
    <div className="header">
      <Link className="logo" to="/">
        DS
      </Link>
      <div className="header-right">
        <NavLink to="/" exact className="header-link" activeClassName="active">
          <FaHome className="icon" /> Home
        </NavLink>
        {user ? (
          <div className="profile-container">
            <NavLink
              to="/profile"
              className="header-link"
              activeClassName="active"
            >
              <BiSolidUser className="icon" /> Profile
            </NavLink>
            <div className="profile-picture">
              <img src={user.photoURL} alt="Profile" />
            </div>
            <div
              className="sign-out header-link"
              activeClassName="active"
              onClick={handleSignOut}
            >
              Sign Out
            </div>
          </div>
        ) : (
          <NavLink to="/login" className="header-link" activeClassName="active">
            <BiLogIn className="icon" /> Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;

