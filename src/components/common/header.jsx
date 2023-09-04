import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import { UserAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

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
    <>
      <Navbar expand="lg" className="bg-body-primary navbar">
        <Container className="space">
          <Link className="navbar-brand" to="/">DS</Link>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>

                {user ? (
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/profile">
                      {user.displayName}
                    </Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action/3.4"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
                {user ? (<div className="profile-picture">
                  <img src={user.photoURL} alt="Profile" />
                </div>): null}
                
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
