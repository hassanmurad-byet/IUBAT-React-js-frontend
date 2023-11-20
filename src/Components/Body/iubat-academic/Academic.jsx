import React from 'react'
import './acade.css';
import img1 from './acaimg/img1.jpg';
import img2 from './acaimg/img2.jpg';
import img3 from './acaimg/img3.jpg';


const Academic = () => {
  return (
    <div className="acade">
      <span className="title2"> <h2 className="Ac"> Academics</h2>  <p className="tex">Nurtures the learners to flourish enough to make significant contribution to global community and be the future leaders.</p>  </span>
      <div className="Acaimages">
        <div className="cd">
          <img src={img2} alt="" className="Acimg" width="460" height="345" /> <br />
            <h2 className="HT">Graduate Program</h2>
            <p className="txt">Provides ample opportunities with advanced learning and research practices in a specialized discipline to expand employability and to comprehend the human and natural world.</p> 
        </div>
        <div className="cd">
          <img src={img3} alt="" className="Acimg" width="460" height="345"   /><br />
            <h2 className="HT">Undergraduate Programs </h2>
            <p className="txt">Provide rich learning experiences about discipline specific knowledge, and applied and generic skills to enable the graduates to be committed citizens who cultivate ethics and values.</p> 
        </div>
        <div className="cd">
          <img src={img1} alt="" className="Acimg" width="460" height="345"   /> <br />
            <h2 className="HT">Lifelong Learning </h2>
            <p className="txt">Encourage the learners in pursuit of knowledge both for personal and professional reasons and thus IUBAT develops social inclusion, personal enrichment, and urge of self-sustainability, competitiveness and employ-ability.</p>
      </div>
      </div>
      <a href="/" className="bt">More About Academics</a>
    </div>
  )
}

export default Academic;