import React from 'react'
import Navbarr from './Components/Header/Navbar';
import Todaysiubat from './Components/Body/Iubat-today/Todaysiubat';
import Iubatevents from './Components/Body/Iubat-events/iubatevents';
import Academic from './Components/Body/iubat-academic/Academic';
import Alimulla from './Components/Body/Alumulla/alimulla';
import Research from './Components/Body/Research/Research';
import Health from './Components/Body/HearthCare/Health';
import Abdur from './Components/Body/ Abdur_Rab/Abdur';
import Campus from './Components/Body/campuslife/campus';
import Admission from './Components/Body/Admission/admission';
import Facilities from './Components/Body/Facilities/Facilities';
import Aiubat from './Components/Body/About-IUBAT/Aiubat';
import Lastpage from './Components/Body/Lastpage/lastpage';
import Footer from './Components/Footer/footer';
const Main = () => {
  return (
    <div>
      <Navbarr/>
      <Todaysiubat/>
      <Iubatevents/>
      <Academic/>
     <Alimulla/>
     <Research/>
     <Health/>
     <Abdur/>
     <Campus/>
     <Admission/>
     <Facilities/>
     <Aiubat/>
     <Lastpage/>
     <Footer/>
     

 
     </div>
   

   
  )
}

export default Main;