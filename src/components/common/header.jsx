// import React from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import "./header.css";
// import { FaHome } from "react-icons/fa";
// import { BiLogIn } from "react-icons/bi";
// import { BiSolidUser } from "react-icons/bi";
// import { UserAuth } from "../Context/AuthContext";

// const Header = () => {
//   const { user, logOut } = UserAuth();

//   const handleSignOut = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="header">
//       <Link className="logo" to="/">
//         DS
//         {/* <img className="ing" src="D.png" alt="logo"/> */}
//       </Link>
//       <div className="header-right">
//         <NavLink to="/" exact className="header-link" activeClassName="active">
//           <FaHome className="icon" /> Home
//         </NavLink>
//         {!user ? (
//           <NavLink to="/login" className="header-link" activeClassName="active">
//             <BiLogIn className="icon" /> Login
//           </NavLink>
//         ) : null}
//         {/* <NavLink to="/login" className="header-link" activeClassName="active">
//           <BiLogIn className="icon" /> Login
//         </NavLink> */}

//         {user?.displayName ? (
//           <div
//             style={{
//               textDecoration: "none",
//               borderRadius: "28px",
//               border: "transparent",
//               cursor:"pointer"
//             }}
//             className="header-link"
//             activeClassName="active"
//             onClick={handleSignOut}
//           >
//             Sign Out
//           </div>
//         ) : (
//           user ? (
//             <Link to="/profile" className="header-link" activeClassName="active">
//               <BiSolidUser className="icon" /> Profile
//             </Link>
//             ) : null
//           // <Link to="/" className="header-link" activeClassName="active">
//           //   <BiSolidUser className="icon" /> Profile
//           // </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { FaHome } from "react-icons/fa";
import { BiLogIn, BiSolidUser } from "react-icons/bi";
import { UserAuth } from "../Context/AuthContext";

const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    // Show a confirmation dialog
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");

    if (confirmSignOut) {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
        {user ? (
          <NavLink
            to="/profile"
            className="header-link"
            activeClassName="active"
          >
            <BiSolidUser className="icon" /> Profile
          </NavLink>
        ) : null}
        {!user ? (
          <NavLink to="/login" className="header-link" activeClassName="active">
            <BiLogIn className="icon" /> Login
          </NavLink>
        ) : (
          <div
            style={{
              textDecoration: "none",
              borderRadius: "28px",
              border: "transparent",
              cursor: "pointer"
            }}
            className="header-link"
            activeClassName="active"
            onClick={handleSignOut}
          >
            Sign Out
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

