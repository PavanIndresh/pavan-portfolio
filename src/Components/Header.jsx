import Corrus from '../assets/portfolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { useState, useEffect } from 'react';
 
function Header() {

  const [isFixed, setIsFixed] = useState(false);
  const [home, setHome] =useState(false);
  const [about, setAbout] =useState(false);
  const [service, setService] =useState(false);
  const [port, setPort] =useState(false);
  const [contact, setContact] =useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const scrollToHome = () => {
    setHome(true)
    setAbout(false)
    setPort(false)
    setContact(false)
    setService(false)
    window.scrollTo({
      top: 10,
      behavior:'smooth'
    });
  };
  const scrollToAbout = () => {
    setAbout(true)
    setHome(false)
    setPort(false)
    setContact(false)
    setService(false)
    window.scrollTo({
      top: 560,
      behavior: 'smooth'
    });
  };
  const scrollToService = () => {
    setService(true)
    setHome(false)
    setAbout(false)
    setPort(false)
    setContact(false)
    window.scrollTo({
      top: 1355,
      behavior: 'smooth'
    });
  };
  const scrollToPort = () => {
    setPort(true)
    setHome(false)
    setAbout(false)
    setContact(false)
    setService(false)
    window.scrollTo({
      top: 2390,
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    setContact(true)
    setHome(false)
    setAbout(false)
    setPort(false)
    setService(false)
    window.scrollTo({
      top: 3760,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className={isFixed ? 'fixed' : 'Header'}>
        <div className="container">
        <div className='Header-1'>
        <img src={Corrus} alt="" className='portfolioImage' />
        </div>
        <div className='Header-2'>
        <div onClick={scrollToHome} className={home?'active':''}>Home</div>
        <div onClick={scrollToAbout} className={about?'active':''}>About</div>
        <div onClick={scrollToService} className={service?'active':''}>Service</div>
        <div onClick={scrollToPort} className={port?'active':''}>Portfolio</div>
        <div onClick={scrollToContact} className={contact?'active':''}>Contact</div>
      </div>

      <div className="Header-3">
    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="nav-item">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="nav-item">
        <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="nav-item">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="nav-item">
        <FontAwesomeIcon icon={faTwitter} />
    </a>
</div>

        </div>
    </div>
  )
}

export default Header
