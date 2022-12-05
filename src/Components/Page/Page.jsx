import React from 'react'
import './Page.css'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'


const Page = () => {
  return (
<>
      <div className="container">
        <div className="left-side">
          <img src={img1} alt="" />
        </div>
        <div className="right-side">
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for <br />
             various projects across the globe to save energy.
            </li>
            <li>
            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the <br /> old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
            </li>
          </ul>
          <img src={img2} alt="" />
          <p>Government of India has awarded the <b> "National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director <br /> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br /> Minister of State.</p>
        </div>
      </div>

     
</>
  )
}

export default Page