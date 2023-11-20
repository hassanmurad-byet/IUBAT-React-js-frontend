import React from 'react'
import Nursing from './Himg/Nursing.jpg';
import Sghi from './Himg/iubat-sghi.png';
import Counselling from './Himg/IMG_0563.jpg';
import './Health.css';

const Health = () => {
  return (
    <div className='HealthCare'>
      
     <span className='spn'> <h1 className="titnm">Health Care</h1>
           <p className="para">IUBAT cares for your sound growth and nurtures mental and physical health.</p> </span>
           
       
         <div className="Health">
            <div className="care">
                <img src={Nursing} alt="" className="careimg" width="460" height="345"  />
                <h2 className="txtH">Quality Care for Every Student</h2>
                <p className="txtDs">IUBAT health care is committed to providing clear, accurate and honest information about the quality of care we offer to all of our students.</p>
            </div>
            <div className="care">
                <img src={Sghi} alt="" className="careimg" width="460" height="345"   />
                <h2 className="txtH">Health Insurance</h2>
                <p className="txtDs">To ensure that all IUBAT students are adequately insured, all registered  students are automatically enrolled into the IUBAT Student Group Health Insurance which is up to Tk. 100,000 per year per student.
                <a href="/" className="moreDs"> More..</a></p>
            </div>
            <div className="care">
                <img src={Counselling} alt="" className="careimg" width="460" height="345" />
                <h2 className="txtH">Counselling and Guidance</h2>
                <p className="txtDs">Counselling service is to support and assist in overcoming life’s challenges and moving towards positive change.
                <a href="/" className="moreDs"> More..</a></p>
            </div>
         </div>
    </div>
  )
}

export default Health;