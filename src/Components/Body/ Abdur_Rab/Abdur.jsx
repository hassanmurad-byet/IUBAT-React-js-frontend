import React from 'react'
import abdur from './AbdurImg/abdur.png';

import './abdur.css';

const Abdur = () => {
  return (
    <div className="abdur">
        <div className="info">
            <img src={abdur} alt="" className="abdurimg" />
            <h2 className="abdurtitle">“We at IUBAT are committed to provide our students a quality education that enables them to pursue a successful career, enjoy life and contribute to nation-building.”</h2>
            <h3 className="name">Prof Dr Abdur Rab</h3>
     
           <p className="podibi">Vice Chancellor</p>
            <a href="/" className="adbtn">More about Abdur Rab</a>
       
        </div>
 
    </div>
  )
}

export default Abdur;