import React from 'react';
import Footer from '../common/footer';
import { UserAuth } from '../Context/AuthContext';
import './profilepage.css';
import Header from '../common/header';

const ProfilePage = () => {
  const { logOut, user } = UserAuth();

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

  return (
    <>
      <Header />
      <div>
        <div className='profile-style'>
          <h1>Account</h1>
          <div>
            <p>Welcome, {user?.displayName}</p>
          </div>
        </div>
        <button className='p-btn' onClick={handleSignOut}>
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
