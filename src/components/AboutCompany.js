import React from 'react'
import '../stylesheet/HomeAbout.css'
import Aboutus from '../assets/about-us.jpg'
// import { Outlet } from 'react-router-dom'
// import Aboutimg from '../assets/about-us.jpg' 

function AboutCompany() {
  return(
  <section id="about" className='about-us-section'>
  <div className='about-first-content'>
  <div className='about-us-content'>
  <h3 className='about-company-head'>About us</h3>
  <p className='about-company'>Welcome to our cybersecurity website! Established in 2023, our company is driven by a mission to make cybersecurity accessible to everyone. We offer a comprehensive range of services including Managed SOC (Security Operations Center), VAPT (Vulnerability Assessment and Penetration Testing), risk assessment, and digital forensics.
  </p>
  </div>
  </div>
  <div className='about-second-content'>
  <p className='about-owner'>At our core, we believe that cybersecurity is not just a luxury for a select few, but a necessity for individuals and businesses of all sizes. With the ever-increasing threat landscape, we are committed to providing top-notch cybersecurity solutions to safeguard your digital assets and protect you from malicious actors
</p>
  </div>
  
  </section>
  )
}

export default AboutCompany