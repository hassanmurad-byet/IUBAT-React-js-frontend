import React from 'react'
import Tomato from './research/tomato-Potato.jpeg';
import Micro from './research/A-micro.jpeg';
import Brin from './research/Brain.jpeg';
import sweet from './research/IMG.jpeg';
import './Re.css';

const Research = () => {
    return (
        <div className="reserch">
            <div className="fhdr">
                <h2 className="htit">Research</h2>
                <p className="sum">A wide and diverse range of opportunities of research for both students and teachers in knowledge creation for a better world to live in.</p>
            </div>
            <hr />

            <div className="Reshd">
                <div className="mhrd">
                    <h2 className="font">Prof Dr M Alimullah Miyan <br /> Research Institute</h2>
                </div>
                <div className="mhrd">
                    <h2 className="font">10 Centers</h2>
                    <p className="tx">Food Security, Economic, Social & Business Development</p>
                </div>
                <div className="mhrd">
                    <h2 className="font">BDT 20 Million</h2>
                    <p className="tx">Annual research budget</p>
                </div>
            </div>
            <hr />
            
             <h2 className="ReHead">IUBAT research for a better future</h2>



            <div className="Iubtre">
            <div className="iubtre">
                <div className="Rimg">
                    <img src={Tomato} alt="" className="Toimg" width="460" height="345"  />
                    <p className="txts">Tomaalo production by grafting process with Tomato & Potato</p>
                </div>
            
                <div className="Rimg">
                    <img src={Micro} alt="" className="Toimg" width="460" height="345" />
                    <p className="txts">A micro controller based intelligent inverter</p>
                </div>
                <div className="Rimg">
                    <img src={Brin} alt="" className="Toimg" width="460" height="345"  />
                    <p className="txts">We are working on Brain-Controlled Bionic Leg</p>
                </div>
                <div className="Rimg">
                    <img src={sweet} alt="" className="Toimg" width="460" height="345"  />
                    <p className="txts">Success in Sweet Grape Production at IUBAT</p>
                </div>
            </div>
            </div>

            <a href="/" className='btn2'>More About Research</a>

        </div>
    )
}

export default Research;