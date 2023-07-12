import React from 'react'
import '../stylesheet/ServicesNew.css'
import Gif1 from '../assets/mobile-security-icon.gif';


function DesignServices() {
  return (
    <div className='main-services'>
    <img/>
    <h3 className='services-heading'>Our Services</h3>
    <div className='main-services-1-content'>
    <div className='services-content-1'>
    <div className="services-subcontent">
    <img width='75px' height='75px' src={Gif1}/>
    <h2>Web Security</h2>
    <p>Comprehensive VAPT assessments for your web applications.</p>
    </div>
    </div>
    <div className='services-content-2'>
    <div className="services-subcontent">
    <img width='75px' height='75px' src={Gif1}/>
    <h2>Mobile Security</h2>
    <p className='para-size'>Securing your mobile applications from vulnerabilities and threats.</p>
    </div>
    </div>
    <div className='services-content-3'>
    <div className="services-subcontent">
    <img width='75px' height='75px' src={Gif1}/>
    <h2>Infrastructure Security</h2>
    <p className='para-size'>Protecting your IT infrastructure from cyber threats.</p>
    </div>
    </div>
    </div>
    <div className='main-services-2-content'>
    <div className='services-content-4'>
    <div className="services-subcontent">
    <img width='75px' height='75px' src={Gif1}/>
    <h2>CyberSecurity for Individuals</h2>
    <p className='para-size'>Ensuring the online safety of VIPs.</p>
    </div>
    </div>
    <div className='services-content-5'>
    <div className="services-subcontent">
    <img width='75px' height='75px' src={Gif1}/>
    <h2>Managed soc</h2>
    <p className='para-size'>Comprehensive VAPT assessments for your web applications.</p>
    </div>
    </div>
    <div className='services-content-6'>
    <div className="services-subcontent">
    <img width='75px' height='75px' src={Gif1}/>
    <h2>Cybersecurity & awareness </h2>
    <p className='para-size'>Comprehensive VAPT assessments for your web applications.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default DesignServices