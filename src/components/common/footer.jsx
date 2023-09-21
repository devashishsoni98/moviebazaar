import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import {ImGithub} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (<>
    <div className="grid-container">
      <div className="item1 first">
        <h1 className='about-h'>About Us</h1>
        <p>Sample text here.</p>
      </div>
      <div className="item2 second">
        <p>Copyright © Devashish Soni 2023</p>
      </div>
      <div className="item3 third">
        <h1 className='about-h'>Follow Us</h1>
        <div className='links-div'>
        <Link to="https://github.com/devashishsoni98" target='_blank' className='link'><ImGithub/></Link>
        <Link to="https://www.linkedin.com/in/devashish-soni" target='_blank' className='link'><BsLinkedin/></Link>
        <Link to="https://www.instagram.com/_devashishsoni/" target='_blank' className='link'><BsInstagram/></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer