import React from 'react'
import './todays.css';
import convocation from './news/convo.jpg';
import rank6 from './news/rank6.jpg';
import QsRank from './news/qsrank.jpg';
import green from './news/greem.jpg';
import Ui from './news/ui-green.jpg';
import careear from './news/careear .jpg';


const Todaysiubat = () => {
  return (
    <section id="News">
      <div className="Newstitle"> <h2 className="h2"> IUBAT Today </h2> <p className="newsdesc">Latest News .</p></div>
   

      

      <div className="imgs">
         
      <div className="todayimgs">
        <div className="todaycardlg">
        <img src={convocation} alt="" className="todayimglg"   />
        </div>
        <div className="todaycard"> 
        <img src={rank6} alt="" className="todayimg"  width="360" height="345" />
        <p className="todaytxt">IUBAT Ranks 6th in the ASEAN and <br /> Asia Pacific Region in AppliedHE <br /> Private University Ranking 2023 </p>
        </div>
        <div className="todaycard">
        <img src={Ui} alt="" className="todayimg"   width="360" height="345" />
        <p className="todaytxt">IUBAT – UI Green Metric ranked <br /> university - 2022 </p>
        </div>
        </div>
    

        <div className="stodayimgs">
        <div className="todaycard">
        <img src={careear} alt="" className="todayimg"  width="360" height="245" />
        <p className="todaytxt">IUBAT National Career Festival 2023</p>
        </div>
        <div className="todaycard">
        <img src={green} alt="" className="todayimg"  width="360" height="245" />
        <p className="todaytxt">Congratulation to the 2023 IAUP <br />Student Competition Winners</p>
        </div>
        <div className="todaycardlg">
         <img src={QsRank} alt="" className="todayimglg"  width="560" height="445" />         
         </div>
      </div>

      </div>
      
      <div className="btn">
      <a href="/" className='btns'> More News</a>
      </div>
      
      
    </section>



  )
}

export default Todaysiubat;