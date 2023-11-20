import React from 'react'
import './campus.css';
import campus from './campusimg/campuslife.jpeg';
import Art from './campusimg/a.jpeg';
import camlife from './campusimg/camlife.jpeg';

const Campus = () => {
  return (
    <div className='container '>
        <h1 className="campustitle">Campus Life</h1> 
        <p className="campusdes">IUBAT flourishes as a community of talented and masterly people from home and abroad</p>
        <div className="cid">
            <div className="imgde">
                <img src={campus} alt="" className="cpimg" width="460" height="345" />
                <h2 className="camhd">Holistically Balanced</h2>
                <p className="chd">Campus Life is committed to helping students as they wrestle with issues they face, both big and small, while pursuing a balanced life: mentally, physically, and socially.
                <a href="/" className="moreC"> More..</a></p>
            </div>
            <div className="imgde">
                <img src={Art} alt="" className="cpimg"  width="460" height="345" />
                <h2 className="camhd">Arts & Culture</h2>
                <p className="chd">Arts and culture in all their forms arouse your curiosity. Talent and expertise is needed to introduce societies to art.
                <a href="/" className="moreC"> More..</a></p>
            </div>
            <div className="imgde">
                <img src={camlife} alt="" className="cpimg" width="460" height="345" />
                <h2 className="camhd">Diversity & Inclusion</h2>
                <p className="chd">At IUBAT, we welcome and support a diverse community. But we know that to make a better world, we must work to continually make a better IUBAT.
                <a href="/" className="moreC"> More..</a></p>
            </div>
        </div>

        <a href="/" className="campudbtn">More About Campus Life</a>

    </div>
  )
}

export default Campus;