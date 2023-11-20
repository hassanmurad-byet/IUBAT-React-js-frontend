import React, { useState, useEffect } from 'react'
import Logo from '../../Images/Iubat-logo.png';
import nav from './menu.png';
import close from './close.png';
import './navbad.css';
import { NavLink } from 'reactstrap'

const Navbar = () => {

  const [showmenu, setshowmenu] = useState(false);

  // scroll navbar ............show 

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos > currentScrollPos;

    setVisible(isScrollingDown);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);





  return (

    <div className="bg">


      <div className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}  >

        <div className="logos">
          <img src={Logo} alt="" href='/' className='logo' />
          <NavLink href='/' className='IUBAT'>IUBAT</NavLink>
        </div>



        <div className="item">
          <div className="navitems">
            <NavLink href='/' className='navitem'>Student</NavLink>
            <NavLink href='/' className='navitem'>Faculty</NavLink>
            <NavLink href='/' className='navitem'>Administration</NavLink>
            <NavLink href='/' className='navitem'>Campus Life</NavLink>
            <NavLink href='/' className='navitem'>IQAC</NavLink>
            <NavLink href='/' className='navitem'>Notice</NavLink>

          </div>
        </div>

        <div className="items">
          <div className="navbtn">

            <div className="navbarsecond"  >
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)} >News</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Ranking</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Research</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Academics</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Scholarships</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Admission</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Library</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>About</NavLink>
              <NavLink href='/' className='navitem2' onClick={() => setshowmenu(false)}>Volunteer</NavLink>

              <img src={nav} alt="menu" className="mobMenu" onClick={() => setshowmenu(!showmenu)} />
              <div className="navbarsecond3" style={{ display: showmenu ? 'flex' : 'none' }} >
                <img src={close} alt="" className='navcls' onClick={() => setshowmenu(!showmenu)} />
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)} >News</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Ranking</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Research</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Academics</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Scholarships</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Admission</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Library</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>About</NavLink>
                <NavLink href='/' className='navitem3' onClick={() => setshowmenu(false)}>Volunteer</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="theme">
        <p className='iubat'>IUBAT</p>
        <p className='learn'>An Environment Designed for Learning</p>

      </div>

    </div>


  )
}

export default Navbar;