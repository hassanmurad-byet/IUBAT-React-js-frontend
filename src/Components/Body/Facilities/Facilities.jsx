import React from 'react'
import faci1 from './Facimg/fasility1.jpeg';
import faci2 from './Facimg/fasility2.jpeg';
import faci3 from './Facimg/fasility3.jpeg';
import './Facilities.css';
const Facilities = () => {
    return (

        <div className='containerF '>
            <h2 className="faciHead">Facilities</h2>
            <p className="faciDes">A thriving university with full of facilities and services which help students to grow and keep engaged with campus life</p>
            <div className="fcontent">
                <div className="FiDtls">
                    <img src={faci1} alt="" className="fcimg" />
                    <h2 className="fchd">Holistically Balanced</h2>
                    <p className="fcdes">Campus Life is committed to helping students as they wrestle with issues they face, both big and small, while pursuing a balanced life: mentally, physically, and socially.
                        <a href="/" className="fmore"> More..</a></p>
                </div>
                <div className="FiDtls">
                    <img src={faci2} alt="" className="fcimg" />
                    <h2 className="fchd">Holistically Balanced</h2>
                    <p className="fcdes">Campus Life is committed to helping students as they wrestle with issues they face, both big and small, while pursuing a balanced life: mentally, physically, and socially.
                        <a href="/" className="fmore"> More..</a></p>
                </div>
                <div className="FiDtls">
                    <img src={faci3} alt="" className="fcimg" />
                    <h2 className="fchd">Holistically Balanced</h2>
                    <p className="fcdes">Campus Life is committed to helping students as they wrestle with issues they face, both big and small, while pursuing a balanced life: mentally, physically, and socially.
                        <a href="/" className="fmore"> More..</a></p>
                </div>
            </div>
            <a href="/" className="Fcbtn">More About Campus Life</a>

        </div>
    )
}

export default Facilities;