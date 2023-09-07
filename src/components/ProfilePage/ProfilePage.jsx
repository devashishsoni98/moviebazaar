import React, { useEffect, useState } from "react";
import Footer from "../common/footer";
import { UserAuth } from "../Context/AuthContext";
import "./profilepage.css";
import Header from "../common/header";
import { MdVerifiedUser } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";
import { easeInOut, motion } from "framer-motion";

const ProfilePage = () => {
  const { logOut, user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

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
      <Header />
      <motion.div
      initial={{ x: -45, opacity:0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: easeInOut }}
      >
        <div className="profile-style">
          <h1>Welcome, {user?.displayName}</h1>
          <div className="content">
            <img className="user-img" src={user?.photoURL} alt="user-image" />
            <p className="text">You are logged into MovieBazaar!!</p>
            <motion.div
            initial={{ y: 25, opacity:0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: easeInOut }}
            >
            <p className="details">User Details:</p>
            {user?.email ? (
              <>
                <p className="details-content">
                  <span className="details-headings">Email</span> : {user.email}
                </p>
                {user?.emailVerified ? (
                  <p className="details-content">
                    <span className="details-headings">
                      Email verification status
                    </span>
                    : Completed{" "}
                    <MdVerifiedUser
                      style={{ color: "green", marginBottom: ".5%" }}
                    />
                  </p>
                ) : (
                  <p className="details-content">
                    <span className="details-heading">
                      Email verification status
                    </span>
                    : Incomplete{" "}
                    <MdOutlineError
                      style={{ color: "red", marginBottom: ".5%" }}
                    />
                  </p>
                )}
              </>
            ) : (
              <p className="details-content">Email: N/A</p>
            )}
            {user?.metadata ? (
              <>
                <p className="details-content">
                  <span className="details-headings">Account Created at</span> :{" "}
                  {new Date(
                    parseInt(user.metadata.createdAt, 10)
                  ).toLocaleString()}
                </p>
                <p className="details-content">
                  <span className="details-headings">Last Login at</span> :{" "}
                  {new Date(user.metadata.lastSignInTime).toLocaleString()}
                </p>
              </>
            ) : (
              <>
                <p className="details-content">Account Created at: N/A</p>
                <p className="details-content">Last Login at: N/A</p>
              </>
            )}
            {user?.metadata ? (
              <>
                <p className="details-content">
                  <span className="details-headings">Phone Number</span> :{" "}
                  {user.metadata.phoneNumber || "N/A"}
                </p>
              </>
            ) : (
              <p className="details-content">Phone Number is loading.</p>
            )}
            {user ? (
              <>
                <p className="details-content">
                  <span className="details-headings">Your UID</span> :{" "}
                  {user.uid}
                </p>
              </>
            ) : (
              <>
                <p className="details-content">UID is loading.</p>
              </>
            )}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ProfilePage;
