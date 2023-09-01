import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FaHome } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { UserAuth } from "../Context/AuthContext";

const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <Link className="logo" to="/">
        DS
        {/* <img className="ing" src="D.png" alt="logo"/> */}
      </Link>
      <div className="header-right">
        <NavLink to="/" exact className="header-link" activeClassName="active">
          <FaHome className="icon" /> Home
        </NavLink>
        <NavLink to="/login" className="header-link" activeClassName="active">
          <BiLogIn className="icon" /> Login
        </NavLink>

        {user?.displayName ? (
          <div
            style={{
              textDecoration: "none",
              borderRadius: "28px",
              border: "transparent",
              cursor:"pointer"
            }}
            className="header-link"
            activeClassName="active"
            onClick={handleSignOut}
          >
            Sign Out
          </div>
        ) : (
          <Link to="/" className="header-link" activeClassName="active">
            <BiSolidUser className="icon" /> Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
