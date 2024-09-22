import React from 'react'
import "../footer/Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className='footer-logo'>Tommalu.</h2>
          <p> is is best delivery app you can order by order manu </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt=''/>
               <img src={assets.twitter_icon} alt=''/>
                  <img src={assets.linkedin_icon} alt=''/>
          </div>
        </div>
         <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
             <li>About Us</li>
              <li>Delivery</li> 
              <li>Privacy Policy</li>
          </ul>
         </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91 9358992352</li>
              <li>
                tommalu@gmail.com
              </li>
            </ul>
          </div>
      </div>
      <hr />
      <p className='footer-copyright '>
        copyright 2024 © tommalu.com -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
