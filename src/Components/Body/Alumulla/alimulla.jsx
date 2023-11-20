import React from 'react'
import './slimulla.css';
import sir from './Sir/sir.png';
const Alimulla = () => {
  return (
    <div className="ali">
        
        <img src={sir} alt="" className="aliimg" />
        <span className="alltxt"> 
        <h2 className="aligl">“Higher Education for Every Qualified Person with Finance for Meritorious but Needy .”</h2> 
        <h2 className="alinm">Prof Dr M Alimullah Miyan</h2>
        <p className="fnd">Founder Vice-Chancellor</p>
        </span>
        <a href="/" className="mbtn">More about M Alimullah Mitan</a>
       
    </div>
  )
}

export default Alimulla;