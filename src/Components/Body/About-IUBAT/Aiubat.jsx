import React from 'react'
import './Aiubat.css';
import logo from './AIuimg/Iubat-logo.png';
import Sir from './AIuimg/sir.png';
const Aiubat = () => {
  return (
    <div className='container'>
      <h2 className="aboutH">About IUBAT</h2>
      <p className="aboutD">An environment designed for learning and extensive collaboration for building an enriched global community</p>
       
       <div className="ab">
        <div className="abinfo">
            <img src={logo} alt="" className="Mylogo" />
            <h2 className="abdes">A non-Profit University</h2>
        </div>
        <div className="abline">
            
        </div>
        <div className="abinfo">
            <img src={Sir} alt="" className="Mylogo" />
            <h2 className="abdes">Founder Prof Dr M Alimullah Miyan</h2>
        </div>
       </div>
       <div className="Loline"></div>
  


       <div className="nextab">
        <div className="next1">
            <h2 className="nextdate">1989</h2>
            <p className="nextdes">INITIALED</p>
            <br />
            <h2 className="nextdate">1991</h2>
            <p className="nextdes">ESTABLISHED</p>
        </div>
        <div className="nextline"></div>
       
        <div className="next1">
            <h2 className="nextdate">299</h2>
            <p className="nextdes">TEACHER</p>
            <a href="/" className="nextbtn">More Details</a>
            <br />
            <h2 className="nextdate">8397</h2>
            <p className="nextdes">STUDENTS</p>
            <a href="/" className="nextbtn">More Details </a>

        </div>

        <div className="nextline"></div>

        <div className="next1">
            <h2 className="nextdate">1326</h2>
            <p className="nextdes">FACULTY PUBLICATIONS</p>
            <br />
            <h2 className="nextdate">91</h2>
            <p className="nextdes">COLLABORATIONS & MEMBERS</p>
        </div>
       </div>
       <div className="Loline"></div>


    


       <div className="thirdpart">
        <h2 className="thirdH">IUBAT PIONEER IN BANGLADESH</h2>

        <div className="thirdcontent">
            <div className="thieddiv">
            <p className="thirdtxt">Establishing Non-Government University</p>
            <p className="thirdtxt">Introducing BATHM program</p>
            </div>
            <div className="thieddiv">
            <p className="thirdtxt">Introducing BBA program</p>
            <p className="thirdtxt">Introducing BSAg program in private sector</p>
            </div>
            <div className="thieddiv">
            <p className="thirdtxt">Introducing BSME program in private sector</p>
            <p className="thirdtxt">Introducing Nursing program in private sector</p>            
            </div>   
        </div>
        
        <a href="/" className="thirdbtn">More About IUBAT</a>
       </div>

    </div>
  )
}

export default Aiubat;