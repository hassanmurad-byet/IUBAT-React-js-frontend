import React from 'react'
import './last.css';
import Gif from './gif.gif';

const Lastpage = () => {
  return (
    <div className="lastpage">

        <img src={Gif} alt="" className="lastimg" width="960" height="845" />

        <div className="lasttxt">
            <div className="lastinfo">
                <a href='/' className="lastlink">Departments A-Z</a>  <br />
                <a href='/' className="lastlink">Institutes & Centers</a> <br />
                <a href='/' className="lastlink">Society & Community</a><br />
                <a href='/' className="lastlink">Moodle</a> <br />
                <a href='/' className="lastlink">International Program Office</a>
            </div>
            <div className="lastinfo">
                <a href='/' className="lastlink">Online admission</a> <br />
                <a href='/' className="lastlink">Library</a> <br />
                <a href='/' className="lastlink">IUBAT Journal</a><br />
                <a href='/' className="lastlink">Student Safety</a>
                
            </div>
            <div className="lastinfo">
                <a href='/' className="lastlink">Cafeterias</a> <br />
                <a href='/' className="lastlink">Transport Service</a> <br />
                <a href='/' className="lastlink">Sports</a> <br />
                <a href='/' className="lastlink">Sustainable Development</a>
                
            </div>
            <div className="lastinfo">
                <a href='/' className="lastlink">Vice-Chancellor Office</a> <br />
                <a href='/' className="lastlink">Office of the Registrar</a> <br />
                <a href='/' className="lastlink">Visiting Faculty</a> <br />
                <a href='/' className="lastlink">International Advisors</a>
                
            </div>
            <div className="lastinfo">
                <a href='/' className="lastlinkbtn">Student Login</a> <br />
                <a href='/' className="lastlinkbtn">Career</a> 
            </div>
        </div>
    </div>
  )
}

export default Lastpage;