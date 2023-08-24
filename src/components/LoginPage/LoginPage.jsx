import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import SignIn from './login'
import "./LoginPage.css"

const LoginPage = () => {
  return (
    <>
    <div>
      <Header/>
      <SignIn/>
      <Footer/>
    </div>
    </>
  )
}

export default LoginPage