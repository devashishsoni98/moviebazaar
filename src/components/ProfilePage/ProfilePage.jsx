import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { UserAuth } from '../Context/AuthContext'
import './profilepage.css'

const ProfilePage = () => {

  const {logOut, user} = UserAuth()

  const handleSignOut = async () => {
      try {
        await logOut()
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
        <Header/>
        <div>
        <button className='p-btn' onClick={handleSignOut}>
            Logout
        </button>
        <div className='profile-style'>
        <h1>
            Account 
        </h1>
        <div>
        <p>Welcome, {user?.displayName}</p>
        </div>
    </div>
    </div>
        <Footer/>
    </>
  )
}

export default ProfilePage