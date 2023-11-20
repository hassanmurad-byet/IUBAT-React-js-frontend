import React from 'react'
import './footer.css';
import Logo from './Iubat-logo.png';

const Footer = () => {
  return (
    <div className="footer">
         <img src={Logo} alt="" className="footerimg" />
        <h3 className="footerhead">IUBAT— International University of Business Agriculture and Technology</h3>
        <p className="foot">4 Embankment Drive Road,Sector-10, Uttara Model Town, Dhaka-1230.</p>
       <p className="foot"> <span className="bolded">Phone:</span> (88 02) 55091801-5, Mobile : +88 01714 014 933, +88 01833 386 644(Hunting)</p>

       <p className="foot"> <span className="bolded">Fax:</span> (880-2) 5895 2625, <span className='bolded'>Email:</span>   info@iubat.edu  </p>

  
  </div>
 
  )
}

export default Footer;