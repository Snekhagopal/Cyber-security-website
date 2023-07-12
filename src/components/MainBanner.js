import React,{useState} from 'react'
import logo from '../assets/security.png'
import vdo from '../assets/herovdo.mp4'
import '../stylesheet/MainBanner.css'
function Background() {
    const [show, setShow] = useState(false);
    const onClickHandler = () => {
      setShow(!show);
    };
  return (
    <div className='bg-img'>
    <video className='vdo-img' src={vdo} autoPlay loop muted/>
    <div className='overlay'>
    <div className='nav-link'>
    <div className="company-logo">
    <img className="company-logo-img" src={logo} />
  </div>
  <div className="main-nav">
    <nav>
      <ul className={`nav-list ${show ? "active" : "inactive"}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
       
      </ul>
    </nav>
  </div>
  <div onClick={onClickHandler} className="show-menu">
    <i class="bi bi-list"></i>
  </div>
    </div>
    <div className='content'>
    <div className="main-bg-content-left" data-aos="fade-left">
          <p className="company-title">Hiretist Cybersecurity</p>
          <p className="company-content-main">Cybersecurity for everyone</p>
          <p className="company-content">
            Cybersecurity services for Protecting <br></br> Your Online business
            Websites, Mobile Apps, Network, and Servers.
          </p>
        </div></div>
    </div>
    </div>
  )
}

export default Background