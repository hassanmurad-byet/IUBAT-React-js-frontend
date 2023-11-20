import React from 'react'
import Admission from './adimg/admission.jpg';
import './admission.css';
const admission = () => {
  return (
     <div className="containerAD">
    
      <h1 className="admh">Admission</h1>
          <p className="admdes">No one is refused from IUBAT only because of financial inability</p>
          <div className="admimg">
            <img src={Admission} alt="" className="aimg" />
            <h2 className="imgh">Higher Education for Every Qualified Person: with Finance for Meritorious but Needy</h2>
          </div>

       <a href="/" className="admibtn">More About Admission</a>

     </div>
  )
}

export default admission;