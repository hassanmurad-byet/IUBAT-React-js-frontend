import React from 'react'
import './event.css';
import conference from './eventimg/conference-2022.jpg';
import convo2022 from './eventimg/convocation-2022.jpg';
import HAMeem from './eventimg/HA-MEEM.jpg';
import itech from './eventimg/itech.jpg';

const Iubatevents = () => {
    return (
        <section className="events">
           
            <div className="tit">
                 <h1 className="ent">IUBAT Events </h1>
             </div>

            <div className="all">
         

           
                <div className="Imgs">
                    <div className="Cards">
                        <img src={HAMeem} alt="" className='Img1' width="350" height="245" />
                        <p className="Text1">Ha-Meem Group will be organizing <br /> recruitment interviews at IUBAT <br /> campus</p>
                    </div>
                    <div className="Cards">
                        <img src={itech} alt="" className="Img1" width="350" height="245" />
                        <p className="Text1">iTech Expo- IUBAT 2022</p>
                    </div>
                    <div className="Cards">
                        <img src={convo2022} alt="" className="Img1" width="350" height="245" />
                        <p className="Text1">6th Convocation of IUBAT</p>
                    </div>
                    <div className="Cards">
                        <img src={conference} alt="" className="Img1" width="350" height="245" />
                        <p className="Text1">International Conference on <br /> Sustainable Computing and <br /> Management (SUSCOM-2022)</p>
                    </div>
                
                </div>
                <div className="btns1"> 
                 <a href="/" className="btn1">More Events</a> 
                 </div>
                </div>
                
              
            
        </section>
    )
}

export default Iubatevents;